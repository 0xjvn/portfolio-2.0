/**
 * Forward Deployed Engineering track.
 *
 * This page is a thesis and a direction, not a claim of shipped client work.
 * It's synthesized from my own reading and the systems I'm currently building
 * to get good at this. Framed honestly as an in-progress focus.
 */

export const fdeIntro = {
  kicker: "Forward Deployed Engineering · what I offer",
  headline: "Where intelligence meets the business.",
  lede: [
    "Every company can now buy intelligence. When the model is a commodity, having it stops being an advantage. The edge moves to deployment: where it's used, how, and why.",
    "Closing the gap between a capable model and a business that actually runs on it is what I offer. Here's how I think about the work, and how I'd approach it.",
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
  heading: "What I deliver",
  intro:
    "Given a workflow worth automating, here is the shape of how I take it from an idea to something a business can actually rely on.",
  weeks: [
    {
      week: "01",
      title: "An agent that closes a real loop",
      detail:
        "Learn the target domain in granular detail and build an agent that completes an actual end-to-end task, with full logging and an audit trail so its work can be trusted.",
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
      title: "A defensible business case",
      detail:
        "Tie it back to the business half: the pain point, why AI belongs there, the architecture, the accuracy, the economics. The result is a system that earns its place, with the numbers to prove it.",
    },
  ] as BuildWeek[],
};
