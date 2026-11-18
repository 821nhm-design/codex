import { site } from "@/content";

export function Footer() {
  return (
    <footer className="footer">
      <small>
        © {new Date().getFullYear()} {site.name}
      </small>
    </footer>
  );
}
