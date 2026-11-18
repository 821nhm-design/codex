import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { results } from "@/content";

export function Results() {
  return (
    <section className="band" id="results">
      <div className="section">
        <FadeIn className="section-head">
          <h2>{results.title}</h2>
        </FadeIn>
        <Stagger className="grid">
          {results.items.map((s) => (
            <StaggerItem key={s.label} className="stat">
              <span className="stat-value">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="note">{results.note}</p>
      </div>
    </section>
  );
}
