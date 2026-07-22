import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { identity, resumes, tracks, type TrackId } from "../data/site";

interface Props {
  track: TrackId;
  children: ReactNode;
}

/** Shared frame for the three sub-pages: track-aware header + contact footer. */
export default function Chrome({ track, children }: Props) {
  return (
    <div className="page" data-track={track}>
      <TrackHeader track={track} />
      <main>{children}</main>
      <Footer track={track} />
    </div>
  );
}

function TrackHeader({ track }: { track: TrackId }) {
  return (
    <header className="track-header">
      <Link className="home" to="/">
        <span className="arrow">←</span>index
      </Link>
      <nav className="track-switch" aria-label="Tracks">
        {tracks.map((t) => (
          <Link
            key={t.id}
            to={t.path}
            className={t.id === track ? "active" : undefined}
            aria-current={t.id === track ? "page" : undefined}
          >
            {t.id}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer({ track }: { track: TrackId }) {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="contact" className="section contact">
        <h2 className="section-label">
          <span className="index">§</span> Contact
        </h2>
        <p className="contact-copy">
          Email is the fastest way to reach me. Open to protocol work,
          backend systems, and conversations about deploying AI where it
          actually earns its place.
        </p>
        <a className="big-link" href={`mailto:${identity.email}`}>
          {identity.email}
        </a>
        <div className="contact-links">
          <a href={identity.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <a href={identity.medium} target="_blank" rel="noreferrer">
            medium
          </a>
          {resumes.map((r) => (
            <a key={r.file} href={r.file} target="_blank" rel="noreferrer">
              {r.label.toLowerCase()}
            </a>
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <span>
          © {year} {identity.name} · Bangalore
        </span>
        <nav className="track-switch" aria-label="Tracks">
          <Link to="/">index</Link>
          {tracks
            .filter((t) => t.id !== track)
            .map((t) => (
              <Link key={t.id} to={t.path}>
                {t.id}
              </Link>
            ))}
        </nav>
      </footer>
    </>
  );
}
