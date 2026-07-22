import { Link } from "react-router-dom";
import { identity, resumes, tracks } from "../data/site";

export default function LandingPage() {
  const year = new Date().getFullYear();
  return (
    <div className="page">
      <div className="landing-masthead">
        <span className="name">{identity.name}</span>
        <span>{identity.location}</span>
      </div>

      <section className="landing-hero">
        <p className="kicker">Engineer · Bangalore</p>
        <h1>
          I build software where <em>correctness is not optional.</em>
        </h1>
        <p className="lede">
          I'm {identity.name}. My work runs across three disciplines that share
          one instinct: build systems that stay correct under load,
          adversaries, and ambiguity. Pick the thread you came for.
        </p>
      </section>

      <nav className="tracks" aria-label="Choose a track">
        {tracks.map((t) => (
          <Link key={t.id} to={t.path} className="track-row" data-track={t.id}>
            <span className="t-index">{t.index}</span>
            <span className="t-body">
              <span className="t-discipline">
                {t.discipline}
                {t.status && <span className="t-status">{t.status}</span>}
              </span>
              <h2>{t.name}</h2>
              <p className="t-blurb">{t.blurb}</p>
              <span className="t-proof">
                {t.proof.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </span>
            </span>
            <span className="t-enter">enter →</span>
          </Link>
        ))}
      </nav>

      <footer className="site-footer">
        <span>
          © {year} {identity.name}
        </span>
        <span className="contact-links" style={{ margin: 0 }}>
          <a href={`mailto:${identity.email}`}>email</a>
          <a href={identity.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          {resumes.map((r) => (
            <a key={r.file} href={r.file} target="_blank" rel="noreferrer">
              {r.label.toLowerCase().replace("résumé - ", "cv · ")}
            </a>
          ))}
        </span>
      </footer>
    </div>
  );
}
