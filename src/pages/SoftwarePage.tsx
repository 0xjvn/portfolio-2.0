import { Link } from "react-router-dom";
import Chrome from "../components/Chrome";
import Experience from "../components/Experience";
import { education, recognition } from "../data/site";
import {
  softwareIntro,
  softwareProtocolHighlight,
  softwareSkills,
  softwareWork,
} from "../data/software";

export default function SoftwarePage() {
  return (
    <Chrome track="software">
      <section className="page-intro">
        <p className="kicker">{softwareIntro.kicker}</p>
        <h1>{softwareIntro.headline}</h1>
        <div className="lede">
          {softwareIntro.lede.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <Experience index="01" title="Selected work" entries={[softwareWork]} />

      <section className="section">
        <h2 className="section-label">
          <span className="index">02</span> {softwareProtocolHighlight.heading}
        </h2>
        <div className="callout">
          {softwareProtocolHighlight.bullets.map((b) => (
            <p key={b}>{b}</p>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
          <Link className="inline-link" to={softwareProtocolHighlight.link.to}>
            {softwareProtocolHighlight.link.label} →
          </Link>
        </p>
      </section>

      <section className="section">
        <h2 className="section-label">
          <span className="index">03</span> Toolbox &amp; background
        </h2>
        <dl className="fact-grid">
          {softwareSkills.map((s) => (
            <div key={s.label} style={{ display: "contents" }}>
              <dt>{s.label}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
          <div style={{ display: "contents" }}>
            <dt>Education</dt>
            <dd>
              <span className="primary">{education.degree}</span>,{" "}
              {education.school}, {education.period}. {education.detail}.
            </dd>
          </div>
          <div style={{ display: "contents" }}>
            <dt>Recognition</dt>
            <dd>
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
            </dd>
          </div>
        </dl>
      </section>
    </Chrome>
  );
}
