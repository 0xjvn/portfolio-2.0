import type { ExperienceEntry } from "../data/site";

interface Props {
  index: string;
  title: string;
  entries: ExperienceEntry[];
}

export default function Experience({ index, title, entries }: Props) {
  return (
    <section id="experience" className="section">
      <h2 className="section-label">
        <span className="index">{index}</span> {title}
      </h2>
      {entries.map((entry) => (
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
