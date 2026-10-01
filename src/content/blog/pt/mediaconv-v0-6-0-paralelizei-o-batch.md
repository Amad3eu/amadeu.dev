---
title: "MediaConv v0.6.0: paralelizei o batch e descobri que estava otimizando a coisa errada"
description: Antes de paralelizar, medi. De 140 processos num lote de 20 arquivos, 80 só redetectavam o FFmpeg. Memoizar a detecção e depois adicionar --jobs levou o lote de 11,83s para 0,97s.
date: 2026-09-27
category: Go
tags: [go, ffmpeg, performance, open-source]
externalUrl: https://www.tabnews.com.br/amad3eu/mediaconv-v0-6-0-paralelizei-o-batch-e-descobri-que-estava-otimizando-a-coisa-errada
externalSite: TabNews
readingTime: 4
---
