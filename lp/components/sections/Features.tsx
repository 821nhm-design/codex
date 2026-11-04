import { FadeIn } from "@/components/FadeIn";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { features } from "@/content";

export function Features() {
  return (
    <section className="section" id="features">
      <FadeIn className="section-head">
        <h2>{features.title}</h2>
        <p className="lead">{features.lead}</p>
      </FadeIn>
      <Stagger className="grid">
        {features.items.map((f, i) => (
          <StaggerItem key={f.title} className="card" lift>
            <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
