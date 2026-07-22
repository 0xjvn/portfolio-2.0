/**
 * Software / backend track. Facts come from the SWE resume
 * (Jeevan_Siddharth_SWE_Resume.pdf). Nothing here is invented.
 */

import type { ExperienceEntry } from "./site";

export const softwareIntro = {
  kicker: "Software Engineering · Backend & distributed systems",
  headline: "Backend systems that hold up under load.",
  lede: [
    "I build scalable, structured backends and high-performance distributed systems. I'm deep in TypeScript and NestJS, with real experience shipping fault-tolerant orchestration engines and long-running workflows.",
    "Most of my work is 0-to-1: designing the data model, tuning low-level performance, and doing the unglamorous translation from business logic into software that actually runs in production.",
  ],
};

export const softwareWork: ExperienceEntry = {
  org: "Vlinder Labs",
  role: "Software Engineer",
  period: "2023 - present",
  location: "Bangalore, India",
  groups: [
    {
      heading: "Systems & architecture",
      bullets: [
        "Engineered a modular backend on hexagonal architecture with NestJS, keeping business logic, persistence, and transport strictly separated so each can change without touching the others.",
        "Architected a plug-and-play onboarding service on the ports-and-adapters pattern: any internal project gets configurable, out-of-the-box onboarding with zero code rewrite.",
        "Run long-lived, failure-prone workflows on Temporal.io with durable state recovery, so critical async tasks survive crashes and resume where they left off.",
        "Designed a project-planning engine on directed acyclic graphs and the critical path method, computing task dependencies and timelines dynamically.",
      ],
    },
    {
      heading: "Reliability, security & performance",
      bullets: [
        "Own the AuthN/AuthZ pipeline: OAuth 2.0 with PKCE for client flows, JWT-based SSO, and granular RBAC/ABAC access policies across distributed services.",
        "Architected a distributed-systems fork integrating SLH-DSA post-quantum signatures, rewriting the core payload structure to carry quantum-safe signatures.",
        "Cut cryptographic verification from 30ms to 3ms through compiler-level O3 optimization of the build pipeline, a 5x gain in system throughput.",
        "Fold AI assistants into the development lifecycle to automate recurring work, freeing bandwidth for the problems that need human judgment.",
      ],
    },
  ],
};

export const softwareProtocolHighlight = {
  heading: "From the protocol side",
  bullets: [
    "Ranked in the top 100 contributors to go-ethereum, the primary implementation of a globally distributed, fault-tolerant network securing over $300B in assets.",
    "Integrated state-transition logic into the core codebase and standardized RPC APIs by embedding metadata, validating execution against the full test suites (PR #33832, PR #33709).",
  ],
  link: { label: "See the full protocol work", to: "/blockchain" },
};

export const softwareSkills: { label: string; items: string }[] = [
  {
    label: "Languages",
    items: "TypeScript · Go · Solidity",
  },
  {
    label: "Backend",
    items:
      "NestJS · Temporal.io · GraphQL · MongoDB · TypeORM · hexagonal architecture · ports & adapters",
  },
  {
    label: "Reliability",
    items:
      "durable workflows · fault tolerance · OAuth 2.0 / PKCE · JWT SSO · RBAC & ABAC · DAG / CPM scheduling",
  },
  {
    label: "Testing",
    items: "Mocha · Chai · Hardhat · React",
  },
];
