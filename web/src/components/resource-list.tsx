type Resource = {
  name: string;
  description: string;
  href: string;
};

const resources: Resource[] = [
  {
    name: "Turkish Basics on Duolingo",
    description: "Daily bite-size lessons with native audio and review drills.",
    href: "https://www.duolingo.com/course/tr/en/Learn-Turkish",
  },
  {
    name: "Easy Turkish on YouTube",
    description:
      "Street interviews with subtitles that reveal how greetings change across ages.",
    href: "https://www.youtube.com/@EasyTurkish",
  },
  {
    name: "Culture Trip: Turkish Hospitality",
    description:
      "An overview of the customs that shape greetings, hosting, and friendship.",
    href: "https://theculturetrip.com/europe/turkey/articles/a-guide-to-turkish-hospitality/",
  },
  {
    name: "Italki Tutors",
    description:
      "Book live chats with locals to practice your Merhaba in real conversations.",
    href: "https://www.italki.com/teachers/turkish",
  },
];

export function ResourceList() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {resources.map((resource) => (
        <li key={resource.name}>
          <a
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col gap-2 rounded-3xl border border-zinc-800/40 bg-zinc-900 px-6 py-5 transition hover:border-orange-400 hover:bg-zinc-900/80"
          >
            <span className="text-lg font-semibold text-white">
              {resource.name}
            </span>
            <span className="text-sm leading-relaxed text-zinc-300">
              {resource.description}
            </span>
            <span className="text-sm font-semibold text-orange-400 opacity-0 transition group-hover:opacity-100">
              Open resource {"->"}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
