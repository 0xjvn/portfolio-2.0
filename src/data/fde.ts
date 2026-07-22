/**
 * Forward Deployed Engineering track.
 *
 * This page is a thesis and a direction, not a claim of shipped client work.
 * It's synthesized from my own reading and the systems I'm currently building
 * to get good at this. Framed honestly as an in-progress focus.
 */

export const fdeIntro = {
  kicker: "Forward Deployed Engineering · building toward it",
  headline: "Where intelligence meets the business.",
  lede: [
    "Every company can now buy intelligence. When the model is a commodity, having it stops being an advantage. The edge moves to deployment: where it's used, how, and why.",
    "That gap between a capable model and a business that actually runs on it is the Forward Deployed Engineer's job. It's the direction I'm building toward, and this page is where I think out loud about it.",
  ],
};

export interface FdeBlock {
  heading: string;
  body: string[];
}

export const thesis: FdeBlock[] = [
  {
    heading: "Intelligence is commoditizing",
    body: [
      "If everyone can access the same models, intelligence alone is no longer the moat. The value is not in the tokens. It's in how well you use them, and where you decide they belong at all.",
      "A pilot usually fails not because the model is weak, but because it wasn't tailored to how the work is really done. Not everyone likes the same pizza.",
    ],
  },
  {
    heading: "The best system is a combination",
    body: [
      "The strongest AI systems are rarely an agent doing everything. They are a blend: deterministic software where the rules and inputs are predictable, an agent where the objective is clear but the path varies, and a human in control where a decision carries real ambiguity or irreversible consequences.",
      "Knowing which of the three a given step deserves is the judgment the role is actually paid for.",
    ],
  },
];

export interface JobPart {
  label: string;
  title: string;
  body: string;
}

export const jobParts: JobPart[] = [
  {
    label: "01",
    title: "Audit",
    body: "Find the workflow worth rebuilding. Trace every step of how the work is really done, then produce an operating map: what should be deterministic software, what should be an agent, and what a human must still own.",
  },
  {
    label: "02",
    title: "Evals",
    body: "Turn non-determinism into evidence. If nine of fifty runs failed, the job is to know exactly why, missing data, wrong record, bad tool call, and feed that back until the system is provably reliable. This is the part that matters most.",
  },
  {
    label: "03",
    title: "Deployment",
    body: "Make it work inside the business. Integrate with what already exists instead of a big-bang replacement, test in a sandbox on the company's real infra, and grow autonomy only after the system earns trust. Then watch the metrics, KPIs, and SLAs like they're yours.",
  },
];

export const bothSides = {
  heading: "Both sides of the aisle",
  body: [
    "An FDE turns business understanding into working software, which means being fluent in two languages at once.",
    "The commercial one: workflows, cost, incentives, risk, adoption, internal politics, and where the real business value sits. The technical one: models, systems, APIs, data, code, and reliability.",
    "You should end up model-agnostic, able to match the right model to the task. But that instinct comes from depth, so the honest advice is to get genuinely good with one provider first and build from there.",
  ],
};

export interface BuildWeek {
  week: string;
  title: string;
  detail: string;
}

export const building = {
  heading: "What I'm building",
  intro:
    "The way to learn this is not to read about it. It's to do the job before you have the title, and end up with evidence that you can. That's the arc I'm working through right now.",
  weeks: [
    {
      week: "01",
      title: "An agent that closes a real loop",
      detail:
        "Pick one narrow domain, learn it in granular detail, and build an agent that completes an actual end-to-end task, with full logging and an audit trail so its work can be trusted.",
    },
    {
      week: "02",
      title: "A system that can recover",
      detail:
        "Constrain outputs to a JSON schema, not free text. Map the failure modes and handle them. Building for the unhappy path is where most of the real value is.",
    },
    {
      week: "03",
      title: "Measurable and economical",
      detail:
        "Add retry logic and a golden dataset for evals so it improves over time. Reach for cheaper models where they hold up. Track time saved, cost, revenue uplift, and risk mitigated.",
    },
    {
      week: "04",
      title: "Defend it like an FDE",
      detail:
        "This is the business half: the pain point, why AI belongs there, the architecture, the accuracy, the economics. Pitch it, find out what I got wrong, and carry that into the next build.",
    },
  ] as BuildWeek[],
  derisk:
    "A company often sees an internal AI project as risk: what if it fails? The answer is to run the audit for free, de-risk it, and charge only once they can see the value. It's early, and the demand for people who can actually do this is real.",
  reference: {
    text: "Currently working through",
    label: "FDE in 30 Days",
    url: "https://learn.varickagents.com/fde-in-30-days",
  },
};
