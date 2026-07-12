import { contributions, draftWork, identity } from "../data/site";

export default function Contributions() {
  return (
    <section id="contributions" className="section">
      <h2 className="section-label">
        <span className="index">01</span> Client contributions
      </h2>
      <p className="contrib-preamble">
        Every PR below is merged and linked - the recent thread is era files
        and history expiry, carried across the execution layer, both Lodestar
        consensus clients, and the e2store spec itself. On go-ethereum I rank
        in the top 100 of ~1,400 all-time{" "}
        <a href={identity.gethContributions} target="_blank" rel="noreferrer">
          contributors
        </a>
        .
      </p>

      {contributions.map((repo) => (
        <div className="repo-block" key={repo.repo}>
          <div className="repo-head">
            <h3>
              <a href={repo.url} target="_blank" rel="noreferrer">
                <span className="org">{repo.org}/</span>
                {repo.repo}
              </a>
            </h3>
            <span className="repo-meta">
              {repo.layer} · {repo.language}
            </span>
          </div>
          <ul className="pr-list">
            {repo.prs.map((pr) => (
              <li key={pr.number}>
                <span className="pr-num">
                  <a href={pr.url} target="_blank" rel="noreferrer">
                    #{pr.number}
                  </a>
                </span>
                <span className="pr-title">{pr.title}</span>
                <span className="pr-date">{pr.merged}</span>
                {pr.note && <span className="pr-note">{pr.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="contrib-footnote">
        <p>
          {draftWork.text}{" "}
          <a href={draftWork.prUrl} target="_blank" rel="noreferrer">
            {draftWork.prLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
