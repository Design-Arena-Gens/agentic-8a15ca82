import { CultureHighlights } from "@/components/culture-highlights";
import { PhraseExplorer } from "@/components/phrase-explorer";
import { ResourceList } from "@/components/resource-list";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white text-zinc-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-20 pt-24 sm:px-12 lg:px-16">
        <section className="flex flex-col gap-10 rounded-3xl bg-white/80 p-10 shadow-xl shadow-orange-100 ring-1 ring-orange-100 backdrop-blur">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-orange-600">
              Merhaba!
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl">
              Discover the warmth behind the Turkish word for hello.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
              From morning markets to evening tea, <strong>Merhaba</strong>{" "}
              opens doors to conversation, hospitality, and lasting friendships.
              Explore authentic phrases, cultural insights, and tips to greet
              like a local.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#phrases"
              className="flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Practice phrases
            </Link>
            <Link
              href="#culture"
              className="flex items-center justify-center rounded-full border border-orange-200 px-6 py-3 text-base font-semibold text-orange-600 transition hover:border-orange-400 hover:text-orange-700"
            >
              Learn the culture
            </Link>
          </div>
        </section>

        <section id="phrases" className="flex flex-col gap-8">
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-950">
              Essential greetings & when to use them
            </h2>
            <p className="max-w-2xl text-base text-zinc-600">
              Choose a real-life situation to learn how native speakers greet,
              respond, and keep the conversation flowing.
            </p>
          </header>
          <PhraseExplorer />
        </section>

        <section
          id="culture"
          className="flex flex-col gap-8 rounded-3xl bg-orange-50/70 p-10 ring-1 ring-orange-100"
        >
          <header className="space-y-2">
            <h2 className="text-3xl font-semibold text-zinc-950">
              Beyond the word: cultural highlights
            </h2>
            <p className="max-w-2xl text-base text-zinc-600">
              A heartfelt greeting is more than a phrase—you are sharing a
              moment. These touchpoints help you match the energy of your host
              country.
            </p>
          </header>
          <CultureHighlights />
        </section>

        <section className="flex flex-col gap-6 rounded-3xl bg-zinc-950 px-10 py-12 text-zinc-100">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-white">
              Keep exploring Turkish hospitality
            </h2>
            <p className="max-w-2xl text-base text-zinc-300">
              These handpicked resources help you continue learning—whether you
              are planning a trip, practicing speaking, or curious about
              Anatolian culture.
            </p>
          </div>
          <ResourceList />
        </section>
      </main>
    </div>
  );
}
