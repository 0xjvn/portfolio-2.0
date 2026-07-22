import Chrome from "../components/Chrome";
import { bothSides, building, fdeIntro, jobParts, thesis } from "../data/fde";

export default function FdePage() {
  return (
    <Chrome track="fde">
      <section className="page-intro">
        <p className="kicker">{fdeIntro.kicker}</p>
        <h1>{fdeIntro.headline}</h1>
        <div className="lede">
          {fdeIntro.lede.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">
          <span className="index">01</span> The thesis
        </h2>
        {thesis.map((block) => (
          <div className="prose-block" key={block.heading}>
            <h3>{block.heading}</h3>
            {block.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-label">
          <span className="index">02</span> What the work actually is
        </h2>
        <p className="lead-line">
          Three moves, in order. The middle one is where most people underinvest.
        </p>
        <div className="parts">
          {jobParts.map((part) => (
            <div className="part" key={part.label}>
              <span className="p-num">{part.label}</span>
              <div>
                <h4>{part.title}</h4>
                <p>{part.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">
          <span className="index">03</span> {bothSides.heading}
        </h2>
        <div className="prose-block">
          {bothSides.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">
          <span className="index">04</span> {building.heading}
        </h2>
        <p className="lead-line">{building.intro}</p>
        <div className="parts">
          {building.weeks.map((w) => (
            <div className="part" key={w.week}>
              <span className="p-num">{w.week}</span>
              <div>
                <p className="p-week">Phase {w.week}</p>
                <h4>{w.title}</h4>
                <p>{w.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Chrome>
  );
}
