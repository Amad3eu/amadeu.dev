/**
 * Calendário de contribuições do GitHub, lido no momento do build a partir
 * da página pública do perfil (sem token). Se falhar, o widget some.
 * O workflow `rebuild.yml` refaz o deploy todo dia para manter atualizado.
 */
export type ContributionDay = { date: string; level: number };
export type Contributions = { total: number; weeks: ContributionDay[][] };

let cache: Promise<Contributions | null> | undefined;

export const getContributions = (user: string) => (cache ??= fetchContributions(user));

async function fetchContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { "User-Agent": "amadeu.dev build" },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    const days: ContributionDay[] = [];
    for (const m of html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d)"/g)) {
      days.push({ date: m[1], level: Number(m[2]) });
    }
    if (days.length === 0) return null;
    days.sort((a, b) => a.date.localeCompare(b.date));

    // Agrupa em semanas começando no domingo, como o GitHub.
    const weeks: ContributionDay[][] = [];
    for (const day of days) {
      const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
      if (weekday === 0 || weeks.length === 0) weeks.push([]);
      weeks[weeks.length - 1].push(day);
    }

    const totalMatch = html.match(/([\d,.]+)\s+contributions?\s+in the last year/);
    const total = totalMatch ? Number(totalMatch[1].replace(/[,.]/g, "")) : 0;

    return { total, weeks };
  } catch {
    return null;
  }
}
