"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";

/**
 * 問い合わせフォーム（見た目のみ）。
 * 送信処理は未実装なので、送信ボタンを押すと「未実装」の案内を表示するだけ。
 */
export function ContactForm() {
  const [notice, setNotice] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">
        お名前
        <input id="contact-name" type="text" name="name" placeholder="山田 太郎" required />
      </label>
      <label htmlFor="contact-email">
        メールアドレス
        <input id="contact-email" type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label htmlFor="contact-message">
        お問い合わせ内容
        <textarea id="contact-message" name="message" rows={4} />
      </label>
      <motion.button className="button" type="submit" whileTap={{ scale: 0.97 }}>
        送信する
      </motion.button>
      <AnimatePresence>
        {notice && (
          <motion.p
            className="notice"
            role="status"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            送信機能はまだ実装されていないため、内容は送られていません。
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
