import { FadeIn } from "@/components/FadeIn";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { pricing } from "@/content";

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <FadeIn className="section-head">
        <h2>{pricing.title}</h2>
        <p className="lead">{pricing.lead}</p>
      </FadeIn>
      <Stagger className="grid">
        {pricing.plans.map((p) => (
          <StaggerItem key={p.name} className={p.featured ? "card featured" : "card"} lift>
            {p.featured && <span className="badge">おすすめ</span>}
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <ul>
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
