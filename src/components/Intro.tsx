import { identity, pqEth2 } from "../data/site";

export default function Intro() {
  return (
    <section className="intro">
      <p className="kicker">{identity.role}</p>
      <h1>
        I work on <em>Ethereum clients</em> — and the backend systems around
        them.
      </h1>
      <p className="lede">
        I'm {identity.name} — recognized in the{" "}
        <strong>top 100 contributors</strong> to go-ethereum, the primary
        implementation of a globally distributed, fault-tolerant network
        securing over <strong>$300B</strong> in assets, with merged work
        across both the execution and consensus layers including <strong>lodestar , lodestar-z and eth2-client-store</strong> repo's. I'm the author of{" "}
        <a href={pqEth2.url}>
          <strong>PQ-Eth2</strong>
        </a>
        , a book on post-quantum migration from a consensus-client
        perspective. By day I'm at Vlinder, building the backend
        systems production teams actually run on - and a post-quantum fork with cryptographic agility and NIST approved Signatures.
      </p>
      <div className="meta-row">
        <span className="locale">{identity.location}</span>
        <a href={`mailto:${identity.email}`}>{identity.email}</a>
        <a href={identity.github} target="_blank" rel="noreferrer">
          github.com/{identity.githubHandle}
        </a>
      </div>
    </section>
  );
}
