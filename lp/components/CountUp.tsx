"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** 画面に入ったときに 0 から value まで数字をカウントアップする。 */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // サーバーと最初の描画は必ず 0 から始める（値をずらすとハイドレーションエラーになる）
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // 動きを減らす設定のときは、アニメーションせずにすぐ最終値を出す
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("ja-JP")}
      {suffix}
    </span>
  );
}
