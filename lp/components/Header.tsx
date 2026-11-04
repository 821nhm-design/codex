"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { nav, site } from "@/content";

/** 上部に固定されるヘッダー。スクロール量に応じて影と読み進めバーを表示する。 */
export function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  return (
    <header className={scrolled ? "header is-scrolled" : "header"}>
      <div className="header-inner">
        <a className="brand" href="#top">
          {site.name}
        </a>
        <nav className="nav" aria-label="ページ内リンク">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-small" href="#contact">
          相談する
        </a>
      </div>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  );
}
