import { identity, resumes } from "../data/site";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="contact" className="section contact">
        <h2 className="section-label">
          <span className="index">05</span> Contact
        </h2>
        <p className="contact-copy">
          Email is the fastest way to reach me - for client work, protocol
          research, or backend systems that need to hold up under load.
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
        <span>Set in Newsreader &amp; JetBrains Mono. No tracking.</span>
      </footer>
    </>
  );
}
