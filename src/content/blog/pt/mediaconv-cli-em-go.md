---
title: Criei uma CLI em Go para tornar conversões com FFmpeg mais previsíveis e seguras
description: O MediaConv é uma camada de orquestração sobre o FFmpeg. Ele valida a entrada, converte numa área temporária, inspeciona o resultado e só então publica o arquivo.
date: 2026-09-08
category: Open source
tags: [go, ffmpeg, cli, open-source]
originalUrl: https://www.tabnews.com.br/amad3eu/criei-uma-cli-em-go-para-tornar-conversoes-com-ffmpeg-mais-previsiveis-e-seguras
originalSite: TabNews
---

Há algum tempo comecei a trabalhar no **MediaConv**, uma CLI open source escrita em Go que usa o FFmpeg como engine de processamento.

A ideia inicialmente parecia simples:

> Eu não quero precisar lembrar uma sequência enorme de flags do FFmpeg toda vez que precisar converter um arquivo.

Mas durante o desenvolvimento percebi que o problema mais interessante não era simplesmente esconder parâmetros do FFmpeg.

Era tornar a conversão **previsível, segura e utilizável em automações**.

Foi daí que o MediaConv começou a tomar a forma que tem hoje.

## O que é o MediaConv?

O MediaConv é uma CLI que cria uma camada de orquestração em cima do FFmpeg.

Por exemplo:

```bash
mediaconv convert recording.webm
```

Para áudio:

```bash
mediaconv convert song.wav --to mp3
```

E, a partir da v0.4.0, também é possível converter diretórios inteiros:

```bash
mediaconv batch ./recordings --to mp4 --output-dir ./converted
```

Hoje existem dois profiles principais:

* `web`: vídeos para MP4 usando H.264 + AAC;
* `music`: arquivos de áudio para MP3.

Mas converter mídia é apenas uma parte do projeto.

## Por que não usar FFmpeg diretamente?

Essa provavelmente é a primeira pergunta que aparece.

E o objetivo do MediaConv não é substituir o FFmpeg.

Na verdade, ele depende dele.

A proposta é cuidar das decisões e verificações que normalmente acabam espalhadas entre scripts diferentes.

Uma conversão passa aproximadamente por:

```text
CLI
 ↓
validação do arquivo
 ↓
ffprobe
 ↓
seleção do profile
 ↓
plano de conversão
 ↓
FFmpeg
 ↓
ffprobe do resultado
 ↓
verificação
 ↓
publicação do arquivo
```

O FFmpeg nunca recebe diretamente o destino final.

O MediaConv cria primeiro um arquivo em uma área temporária privada, executa a conversão, inspeciona novamente o resultado e somente depois publica o arquivo.

Se algo der errado no meio do processo, o destino final não recebe um arquivo parcialmente convertido.

## Algumas decisões que tomei

Uma preocupação que tive desde cedo foi evitar transformar a CLI apenas em algo como:

```go
exec.Command("ffmpeg", ...)
```

e considerar o problema resolvido.

### Sem shell no meio

Os argumentos são enviados diretamente ao processo do FFmpeg.

Isso significa que caminhos com espaços e Unicode não precisam ser reinterpretados por `sh`, `cmd.exe` ou outro shell.

### Overwrite precisa ser explícito

Por padrão:

```bash
mediaconv convert video.webm
```

não substitui silenciosamente um arquivo existente.

Para fazer isso é necessário:

```bash
mediaconv convert video.webm --overwrite
```

### Verificação da saída

O sucesso do processo do FFmpeg sozinho não é considerado suficiente.

Depois da conversão, o resultado é inspecionado novamente antes de ser publicado.

### Uso em scripts

Além da saída amigável para terminal:

```bash
mediaconv --json ...
```

permite consumir resultados de forma estruturada.

Também defini códigos de saída específicos para situações como:

* argumentos inválidos;
* FFmpeg ausente;
* arquivo inválido;
* conflito de destino;
* falha na conversão;
* interrupção pelo usuário.

Isso torna a CLI bem mais previsível dentro de pipelines e scripts.

## `mediaconv doctor`

Outra coisa que comecei a perceber durante os testes é que simplesmente encontrar `ffmpeg` no sistema não significa que aquela instalação possui tudo o que o profile precisa.

Então existe:

```bash
mediaconv doctor
```

Ele verifica a instalação e as capabilities necessárias antes de a pessoa descobrir o problema no meio da conversão.

Também existe:

```bash
mediaconv inspect arquivo.webm
```

para visualizar informações da mídia.

## O projeto também me fez estudar bastante sobre distribuição

Hoje estou tentando tratar o MediaConv como um projeto open source de verdade, e não apenas como um repositório de código.

O CI executa testes em Linux, macOS e Windows.

Também existem testes de integração fazendo conversões reais com FFmpeg, race detector, análise de vulnerabilidades e validação do pipeline de release.

As releases são geradas para Linux, macOS e Windows, em AMD64 e ARM64.

Também comecei a trabalhar com:

* GoReleaser;
* checksums;
* SBOM;
* Sigstore;
* provenance;
* Homebrew;
* Scoop;
* pacotes `.deb`, `.rpm` e `.apk`.

Essa parte acabou sendo quase tão interessante quanto a implementação da CLI.

## O que entrou na v0.4.0

A versão mais recente adicionou **batch conversion**.

Agora consigo fazer algo como:

```bash
mediaconv batch ./recordings \
  --to mp4 \
  --output-dir ./converted
```

O próximo passo nessa área é evoluir o processamento de diretórios, incluindo controles de concorrência.

## Próximos passos

Algumas coisas que quero explorar:

* MP4 → WebM;
* geração de previews em GIF;
* AAC e WAV;
* concorrência no modo batch;
* instalação através de mais package managers;
* hardware acceleration, mas somente depois de ter testes confiáveis para cada capability.

Também estou evitando adicionar plugins ou transformar a ferramenta em uma abstração gigantesca antes de existir uma necessidade real.

Quero manter a CLI pequena, previsível e fácil de automatizar.

## Open source

O MediaConv está sob licença MIT e o desenvolvimento está acontecendo publicamente no GitHub:

[github.com/Amad3eu/mediaconv](https://github.com/Amad3eu/mediaconv)

A documentação e o site do projeto também estão sendo desenvolvidos junto com a CLI.

Ainda estou antes da v1.0, então considero esta exatamente a fase em que feedback é mais valioso.

Se vocês usam FFmpeg em scripts, pipelines ou automações, eu adoraria saber:

**quais são as coisas que mais incomodam vocês nesse tipo de workflow?**

E também aceito críticas sobre decisões da arquitetura, CLI e escopo do projeto.
