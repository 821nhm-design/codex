import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { contact } from "@/content";

export function Contact() {
  return (
    <section className="band" id="contact">
      <div className="section">
        <FadeIn className="contact">
          <h2>{contact.title}</h2>
          <p className="lead">{contact.lead}</p>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
