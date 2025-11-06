type Highlight = {
  title: string;
  description: string;
  detail: string;
};

const highlights: Highlight[] = [
  {
    title: "Eye contact matters",
    description: "A warm look reinforces sincerity.",
    detail:
      "Maintaining a brief, steady gaze while saying Merhaba shows that you mean it. Pair it with a gentle nod for an effortless local touch.",
  },
  {
    title: "Tea is the next step",
    description: "Expect an invitation if time allows.",
    detail:
      "It is common to offer tea after the initial greeting. Accepting, even for a few minutes, signals openness to conversation and connection.",
  },
  {
    title: "Cheek kisses are common",
    description: "Among friends and family.",
    detail:
      "In social circles, a double cheek kiss follows the greeting. Let your host initiate, then mirror the gesture from left to right.",
  },
];

export function CultureHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {highlights.map((highlight) => (
        <article
          key={highlight.title}
          className="flex flex-col gap-3 rounded-3xl border border-orange-100 bg-white/70 p-6 shadow-sm shadow-orange-100 transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-zinc-900">
            {highlight.title}
          </h3>
          <p className="text-sm font-medium uppercase tracking-wide text-orange-500">
            {highlight.description}
          </p>
          <p className="text-base leading-relaxed text-zinc-600">
            {highlight.detail}
          </p>
        </article>
      ))}
    </div>
  );
}
