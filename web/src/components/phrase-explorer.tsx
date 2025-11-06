'use client';

import { useMemo, useState } from "react";

type ScenarioKey =
  | "market"
  | "neighbour"
  | "business"
  | "friends"
  | "travel";

type Scenario = {
  key: ScenarioKey;
  label: string;
  greeting: string;
  response: string;
  pronunciation: string;
  tip: string;
  context: string;
  followUp: string;
};

const scenarios: Scenario[] = [
  {
    key: "market",
    label: "Bazaars & shops",
    greeting: "Merhaba, kolay gelsin!",
    response: "Hoş geldiniz, buyurun.",
    pronunciation: "mehr-hah-bah, koh-lai gel-sin",
    tip: "Adding 'kolay gelsin' shows respect for the person's work and is a friendly icebreaker.",
    context:
      "Open-air markets and small shops thrive on warm exchanges. A kind greeting often earns you a smile and better service.",
    followUp: "Fiyatı nedir? (What is the price?)",
  },
  {
    key: "neighbour",
    label: "Meeting neighbours",
    greeting: "Merhaba, nasılsınız?",
    response: "Merhaba, teşekkürler. Siz nasılsınız?",
    pronunciation: "mehr-hah-bah, nah-suhl-suhn-uhz",
    tip: "Turks often ask about wellbeing right away. Keep it brief but genuine.",
    context:
      "Whether in apartment hallways or building courtyards, a little small talk goes a long way in building trust.",
    followUp:
      "Bir şeye ihtiyacınız olursa haber verin. (Let me know if you need anything.)",
  },
  {
    key: "business",
    label: "Professional settings",
    greeting: "Merhaba, iyi günler.",
    response: "Merhaba, buyurun.",
    pronunciation: "mehr-hah-bah, ee-yee goon-ler",
    tip: "Pairing 'Merhaba' with a formal phrase like 'iyi günler' keeps the tone polite and professional.",
    context:
      "In offices and customer service desks, a composed greeting sets the tone for productive conversation.",
    followUp: "Size nasıl yardımcı olabilirim? (How can I assist you?)",
  },
  {
    key: "friends",
    label: "Catching up with friends",
    greeting: "Merhaba! N'apıyorsun?",
    response: "Selam! İyiyim, sen?",
    pronunciation: "mehr-hah-bah! nah-puh-yorsun",
    tip: "Among friends you can swap 'Merhaba' for 'Selam' or add playful intonation.",
    context:
      "Friends greet with energy. Expect hugs, cheek kisses, or a quick tea invitation.",
    followUp: "Akşam çayına beklerim. (Come over for tea tonight.)",
  },
  {
    key: "travel",
    label: "Travel & hospitality",
    greeting: "Merhaba, rezervasyonum vardı.",
    response: "Merhaba, soyadınızı alabilir miyim?",
    pronunciation: "mehr-hah-bah, re-zer-va-syo-num var-dı",
    tip: "State your purpose right after the greeting to help hosts assist you faster.",
    context:
      "Hotels, pensions, and guesthouses appreciate a clear yet friendly introduction.",
    followUp: "Çantanızı bırakabilirsiniz. (You can leave your bag.)",
  },
];

const scenarioOrder: ScenarioKey[] = [
  "market",
  "neighbour",
  "business",
  "friends",
  "travel",
];

export function PhraseExplorer() {
  const orderedScenarios = useMemo(
    () =>
      scenarioOrder
        .map((key) => scenarios.find((scenario) => scenario.key === key))
        .filter((scenario): scenario is Scenario => Boolean(scenario)),
    []
  );

  const [selectedKey, setSelectedKey] = useState<ScenarioKey>("market");
  const activeScenario =
    orderedScenarios.find((scenario) => scenario.key === selectedKey) ??
    orderedScenarios[0];

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <nav className="flex flex-1 flex-col gap-3">
        {orderedScenarios.map((scenario) => {
          const isActive = scenario.key === activeScenario.key;
          return (
            <button
              key={scenario.key}
              onClick={() => setSelectedKey(scenario.key)}
              className={`rounded-2xl border px-5 py-4 text-left transition ${
                isActive
                  ? "border-orange-400 bg-orange-100/60 text-orange-700 shadow-sm"
                  : "border-orange-100 bg-white text-zinc-700 hover:border-orange-200"
              }`}
            >
              <span className="block text-sm font-semibold uppercase tracking-wide">
                {scenario.label}
              </span>
              <span className="mt-1 block text-lg font-medium text-zinc-900">
                {scenario.greeting}
              </span>
            </button>
          );
        })}
      </nav>

      <article className="flex flex-1 flex-col gap-6 rounded-3xl bg-white/80 p-8 shadow-lg shadow-orange-100 ring-1 ring-orange-100">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-950">
            {activeScenario.greeting}
          </h3>
          <p className="text-sm uppercase tracking-wide text-orange-500">
            / {activeScenario.pronunciation} /
          </p>
          <p className="text-base text-zinc-600">{activeScenario.context}</p>
        </div>

        <div className="space-y-4 rounded-2xl bg-orange-50/80 p-6">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Natural response
            </h4>
            <p className="text-lg font-medium text-zinc-900">
              {activeScenario.response}
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Follow-up
            </h4>
            <p className="text-lg font-medium text-zinc-900">
              {activeScenario.followUp}
            </p>
          </div>
        </div>

        <p className="rounded-2xl border border-dashed border-orange-200 bg-orange-50/60 p-4 text-sm text-orange-700">
          {activeScenario.tip}
        </p>
      </article>
    </div>
  );
}
