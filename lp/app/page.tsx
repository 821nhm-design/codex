import { FadeIn } from "@/components/FadeIn";

const features = [
  { title: "特徴タイトル 1", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
  { title: "特徴タイトル 2", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
  { title: "特徴タイトル 3", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
];

const stats = [
  { value: "000+", label: "導入社数" },
  { value: "00%", label: "継続率" },
  { value: "0.0倍", label: "業務効率" },
];

const plans = [
  { name: "ライト", price: "¥0,000", items: ["機能A", "機能B"] },
  { name: "スタンダード", price: "¥00,000", items: ["機能A", "機能B", "機能C"], featured: true },
  { name: "エンタープライズ", price: "お問い合わせ", items: ["全機能", "専任サポート"] },
];

export default function Home() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="section hero">
        <FadeIn>
          <p className="eyebrow">サービス名</p>
          <h1>キャッチコピーが入ります</h1>
          <p className="lead">サブコピーが入ります。サービスの価値を一文で伝える説明文のプレースホルダーです。</p>
          <a className="button" href="#contact">
            お問い合わせ
          </a>
        </FadeIn>
      </section>

      {/* 特徴 */}
      <section className="section" id="features">
        <FadeIn>
          <h2>特徴</h2>
        </FadeIn>
        <div className="grid">
          {features.map((f, i) => (
            <FadeIn key={f.title} className="card" delay={i * 0.1}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 実績 */}
      <section className="section alt" id="results">
        <FadeIn>
          <h2>実績</h2>
        </FadeIn>
        <div className="grid">
          {stats.map((s, i) => (
            <FadeIn key={s.label} className="stat" delay={i * 0.1}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section className="section" id="pricing">
        <FadeIn>
          <h2>料金</h2>
        </FadeIn>
        <div className="grid">
          {plans.map((p, i) => (
            <FadeIn key={p.name} className={p.featured ? "card featured" : "card"} delay={i * 0.1}>
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 問い合わせ */}
      <section className="section alt" id="contact">
        <FadeIn className="contact">
          <h2>お問い合わせ</h2>
          <p>ご質問・資料請求はお気軽にどうぞ。（送信処理は未実装のプレースホルダーです）</p>
          <form className="form">
            <label>
              お名前
              <input type="text" name="name" placeholder="山田 太郎" />
            </label>
            <label>
              メールアドレス
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              お問い合わせ内容
              <textarea name="message" rows={4} />
            </label>
            <button className="button" type="button">
              送信する
            </button>
          </form>
        </FadeIn>
      </section>
    </main>
  );
}
