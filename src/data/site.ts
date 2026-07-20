/**
 * All site content lives here. Every PR listed below was verified as merged
 * via the GitHub API (author:0xjvn) - links are real. Facts come from the
 * two source resumes; nothing here is invented.
 */

export interface PullRequest {
  number: number;
  title: string;
  url: string;
  merged: string; // YYYY-MM
  note?: string;
}

export interface RepoContribution {
  repo: string;
  org: string;
  url: string;
  layer: string;
  language: string;
  prs: PullRequest[];
}

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  groups: { heading?: string; bullets: string[] }[];
}

export const identity = {
  name: "Jeevan Siddharth R",
  role: "Core Protocol Engineer · Backend engineer",
  location: "Bangalore, India",
  email: "jeevansiddusb@gmail.com",
  github: "https://github.com/0xjvn",
  githubHandle: "0xjvn",
  linkedin: "https://www.linkedin.com/in/jeevansiddharth/",
  medium: "https://medium.com/@0xjvn",
  gethContributions: "https://github.com/ethereum/go-ethereum/commits?author=0xjvn",
};

export const resumes = [
  {
    label: "Résumé - protocol / blockchain",
    file: "/Jeevan_Siddharth_BC_Resume.pdf",
  },
  {
    label: "Résumé - backend / software",
    file: "/Jeevan_Siddharth_SWE_Resume.pdf",
  },
];

export const pqEth2 = {
  title: "PQ-Eth2",
  url: "https://pq-eth2.jeevansid.tech/",
  line: "A living design document on how Ethereum consensus-layer clients can implement the post-quantum public-key registry - the reasoning, the moving parts, and implementation paths for the relevant parts of Lean Ethereum. Research is ongoing; the document evolves with it.",
};

export const contributions: RepoContribution[] = [
  {
    repo: "go-ethereum",
    org: "ethereum",
    url: "https://github.com/ethereum/go-ethereum",
    layer: "Execution layer",
    language: "Go",
    prs: [
      {
        number: 34978,
        title: "core/rawdb/eradb: support .ere files in the era store",
        url: "https://github.com/ethereum/go-ethereum/pull/34978",
        merged: "2026-06",
        note: "groundwork for history expiry",
      },
      {
        number: 34714,
        title: "cmd/geth: add Prague pruning points for Hoodi",
        url: "https://github.com/ethereum/go-ethereum/pull/34714",
        merged: "2026-04",
        note: "history-pruning boundaries for the Hoodi testnet",
      },
      {
        number: 33198,
        title: "p2p: track in-progress inbound node IDs to avoid dialing them",
        url: "https://github.com/ethereum/go-ethereum/pull/33198",
        merged: "2026-03",
        note: "removes redundant dials in the devp2p layer",
      },
      {
        number: 33832,
        title: "core: implement EIP-7954 - raise the maximum contract size",
        url: "https://github.com/ethereum/go-ethereum/pull/33832",
        merged: "2026-03",
        note: "validated against the full execution-specs state test suite",
      },
      {
        number: 33709,
        title: "internal/ethapi: add blockTimestamp to eth_getTransaction*",
        url: "https://github.com/ethereum/go-ethereum/pull/33709",
        merged: "2026-02",
        note: "aligns with the Execution API spec; saves consumers a block lookup",
      },
      {
        number: 33486,
        title: "core: clean up finalized block on rewind in setHeadBeyondRoot",
        url: "https://github.com/ethereum/go-ethereum/pull/33486",
        merged: "2025-12",
      },
      {
        number: 33444,
        title: "eth/catalyst: return empty GetBlobsV2 response before Osaka",
        url: "https://github.com/ethereum/go-ethereum/pull/33444",
        merged: "2025-12",
        note: "engine-API behaviour fix for pre-fork requests",
      },
      {
        number: 31804,
        title: "accounts/abi/abigen: remove unnecessary test files",
        url: "https://github.com/ethereum/go-ethereum/pull/31804",
        merged: "2025-05",
      },
    ],
  },
  {
    repo: "lodestar",
    org: "ChainSafe",
    url: "https://github.com/ChainSafe/lodestar",
    layer: "Consensus layer",
    language: "TypeScript",
    prs: [
      {
        number: 9585,
        title: "era: rename shortHistoricalRoot to shortEraRoot",
        url: "https://github.com/ChainSafe/lodestar/pull/9585",
        merged: "2026-07",
        note: "keeps era handling aligned with the e2store spec",
      },
    ],
  },
  {
    repo: "lodestar-z",
    org: "ChainSafe",
    url: "https://github.com/ChainSafe/lodestar-z",
    layer: "Consensus layer",
    language: "Zig",
    prs: [
      {
        number: 473,
        title: "era: rename shortHistoricalRoot to shortEraRoot",
        url: "https://github.com/ChainSafe/lodestar-z/pull/473",
        merged: "2026-07",
        note: "same fix carried across both Lodestar implementations",
      },
    ],
  },
  {
    repo: "e2store-format-specs",
    org: "eth-clients",
    url: "https://github.com/eth-clients/e2store-format-specs",
    layer: "Client specs",
    language: "Spec",
    prs: [
      {
        number: 20,
        title: "fix invalid optional fields, typos, broken links",
        url: "https://github.com/eth-clients/e2store-format-specs/pull/20",
        merged: "2026-06",
        note: "corrections to the era/e2store format spec itself",
      },
    ],
  },
];

export const draftWork = {
  text: "Also drafted an implementation of EIP-8141 (native account abstraction) in go-ethereum to assess its complexity for client teams - deliberately unmerged; it exists to inform the protocol discussion.",
  prLabel: "PR #33954",
  prUrl: "https://github.com/ethereum/go-ethereum/pull/33954",
};

export const experience: ExperienceEntry[] = [
  {
    org: "Ethereum - open source",
    role: "Core contributor",
    period: "2025 - present",
    location: "Remote",
    summary:
      "Ranked in the top 100 of ~1,400 all-time contributors to go-ethereum, the primary Ethereum execution client, securing over $300B in assets.",
    groups: [
      {
        bullets: [
          "Merged PRs across four repositories on both sides of the merge boundary: go-ethereum (EL), Lodestar and lodestar-z (CL), and the eth-clients e2store format specs.",
          "Current thread: era files and history expiry - .ere support in geth's era store, Prague pruning points for Hoodi, and matching era-format fixes in both Lodestar implementations and the spec.",
          "EIP work: implemented EIP-7954 (max contract size) against the execution-specs state tests; drafted EIP-8141 (native account abstraction) to size up client-side complexity.",
        ],
      },
    ],
  },
  {
    org: "Vlinder",
    role: "Blockchain core & backend engineer",
    period: "2023 - present",
    location: "Bangalore, India",
    groups: [
      {
        heading: "Backend systems",
        bullets: [
          "Engineered a modular NestJS backend on hexagonal architecture - strict separation of business logic, persistence, and transport.",
          "Run long-lived, failure-prone workflows on Temporal.io with durable state recovery; built a plug-and-play onboarding module other teams adopt with zero rewrites.",
          "Designed a project-planning engine on DAGs and the critical path method for dynamic task scheduling.",
          "Own the AuthN/AuthZ pipeline: OAuth 2.0 with PKCE, JWT-based SSO, and granular RBAC/ABAC policies.",
        ],
      },
      {
        heading: "Protocol engineering",
        bullets: [
          "Built a custom Geth fork that replaces ECDSA with SLH-DSA post-quantum signatures - rewrote the core/types transaction envelope for quantum-safe payloads.",
          "Cut cryptographic verification from 30ms to 3ms via compiler-level O3 optimization of the build pipeline, a 5× gain in block throughput.",
          "Modified the mempool, propagation, and EVM internals to keep the network stable with much larger PQC signatures.",
        ],
      },
    ],
  },
  {
    org: "National Engineering College / tech summits",
    role: "Visiting mentor & speaker",
    period: "2024 - present",
    location: "India",
    groups: [
      {
        bullets: [
          "Industry mentor for a 3-credit university course - designed the syllabus and guided 50+ students through backend engineering and blockchain protocols.",
          "Keynotes and workshops for 500+ attendees on EVM internals, consensus mechanisms, and Web3 infrastructure.",
        ],
      },
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Protocol",
    items:
      "Go · go-ethereum internals · EVM · devp2p · era / e2store · EIP authoring · post-quantum cryptography (SLH-DSA)",
  },
  {
    label: "Backend",
    items:
      "TypeScript · NestJS · Temporal.io · GraphQL · MongoDB · TypeORM · hexagonal architecture · OAuth 2.0 / PKCE · RBAC & ABAC",
  },
  {
    label: "Elsewhere",
    items: "Solidity · Hardhat · Mocha / Chai · React",
  },
];

export const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Anna University - National Engineering College",
  period: "2020 - 2024",
  detail: "9.1/10 CGPA, honors, top 5% of cohort",
};

export const recognition = [
  {
    title: "STRAT-EX - Chainlink hackathon",
    detail:
      "Automated decentralized trading agent on Chainlink + Uniswap, built with a five-person team across four countries.",
    url: "https://devpost.com/software/unibot-cr9myz",
  },
  {
    title: "GeeksforGeeks - institution rank 1",
    detail: "3,000+ data-structures and algorithms problems solved across platforms.",
  },
];
