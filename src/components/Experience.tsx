import { experience } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-label">
        <span className="index">02</span> Experience
      </h2>
      {experience.map((entry) => (
        <article className="xp-entry" key={entry.org}>
          <div className="xp-head">
            <h3>{entry.org}</h3>
            <span className="xp-period">{entry.period}</span>
          </div>
          <p className="xp-role">
            {entry.role} · {entry.location}
          </p>
          {entry.summary && <p className="xp-summary">{entry.summary}</p>}
          {entry.groups.map((group, i) => (
            <div key={i}>
              {group.heading && (
                <p className="xp-group-heading">{group.heading}</p>
              )}
              <ul>
                {group.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ))}
    </section>
  );
}
