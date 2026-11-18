"use client";

import { motion, type Variants } from "motion/react";
import { hero } from "@/content";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/** ファーストビュー。ページを開いた瞬間に、見出し→説明→ボタンの順で表示する。 */
export function Hero() {
  return (
    <section className="section hero" id="top">
      <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
        <motion.p className="eyebrow" variants={item}>
          {hero.eyebrow}
        </motion.p>
        <motion.h1 variants={item}>{hero.title}</motion.h1>
        <motion.p className="lead" variants={item}>
          {hero.lead}
        </motion.p>
        <motion.div className="actions" variants={item}>
          <motion.a className="button" href={hero.primaryCta.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            {hero.primaryCta.label}
          </motion.a>
          <a className="button button-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={hero.image.src}
          alt={hero.image.alt}
          width={480}
          height={480}
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
        />
      </motion.div>
    </section>
  );
}
