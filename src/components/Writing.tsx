import { identity, pqEth2 } from "../data/site";

export default function Writing() {
  return (
    <section id="writing" className="section">
      <h2 className="section-label">
        <span className="index">03</span> Writing
      </h2>
      <div className="writing-item">
        <h3>
          <a href={pqEth2.url}>{pqEth2.title}</a>
          <span className="status">in progress</span>
        </h3>
        <p>{pqEth2.line}</p>
      </div>
      <div className="writing-item">
        <h3>
          <a href={identity.medium} target="_blank" rel="noreferrer">
            Notes on Medium
          </a>
        </h3>
        <p>
          Occasional write-ups on client internals and protocol work -
          including the reasoning behind the EIP-8141 draft implementation.
        </p>
      </div>
    </section>
  );
}
