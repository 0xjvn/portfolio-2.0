import { education, recognition, skills } from "../data/site";

export default function Colophon() {
  return (
    <section className="section">
      <h2 className="section-label">
        <span className="index">04</span> Toolbox &amp; background
      </h2>
      <dl className="fact-grid">
        {skills.map((s) => (
          <FactRow key={s.label} label={s.label}>
            {s.items}
          </FactRow>
        ))}
        <FactRow label="Education">
          <span className="primary">{education.degree}</span>,{" "}
          {education.school}, {education.period}. {education.detail}.
        </FactRow>
        <FactRow label="Recognition">
          {recognition.map((r, i) => (
            <span key={r.title}>
              {i > 0 && <br />}
              <span className="primary">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.title}
                  </a>
                ) : (
                  r.title
                )}
              </span>{" "}
              - {r.detail}
            </span>
          ))}
        </FactRow>
      </dl>
    </section>
  );
}

function FactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </>
  );
}
