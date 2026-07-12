import { identity } from "../data/site";

export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/">
        portfolio.jeevansid.tech
      </a>
      <nav aria-label="Sections">
        <a href="#contributions">contributions</a>
        <a href="#experience">experience</a>
        <a href="#writing">writing</a>
        <a href="#contact">contact</a>
        <a href={identity.github} target="_blank" rel="noreferrer">
          github ↗
        </a>
      </nav>
    </header>
  );
}
