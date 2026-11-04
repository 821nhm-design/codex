/**
 * LP に表示する文章・数値をまとめたファイル。
 * 本番の内容に差し替えるときは、基本的にこのファイルだけを編集すれば済むようにしている。
 */

export const site = {
  name: "サービス名",
  title: "サービス名 | キャッチコピーが入ります",
  description: "サービスの説明文が入ります（プレースホルダー）。",
};

export const nav = [
  { href: "#features", label: "特徴" },
  { href: "#results", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

export const hero = {
  eyebrow: "サービス名",
  title: "キャッチコピーが入ります",
  lead: "サブコピーが入ります。サービスの価値を一文で伝える説明文のプレースホルダーです。",
  primaryCta: { href: "#contact", label: "無料で相談する" },
  secondaryCta: { href: "#pricing", label: "料金を見る" },
};

export const features = {
  title: "特徴",
  lead: "選ばれている理由を3つにまとめました。",
  items: [
    { title: "特徴タイトル 1", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
    { title: "特徴タイトル 2", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
    { title: "特徴タイトル 3", body: "特徴の説明文が入ります。ここはプレースホルダーです。" },
  ],
};

export const results = {
  title: "実績",
  note: "※ 数値はサンプルです。実際の数値に差し替えてください。",
  items: [
    { value: 120, suffix: "社+", label: "導入社数" },
    { value: 98, suffix: "%", label: "継続率" },
    { value: 3, suffix: "倍", label: "業務効率" },
  ],
};

export const pricing = {
  title: "料金",
  lead: "表示価格はすべて税込・月額です。",
  plans: [
    { name: "ライト", price: "¥0,000", items: ["機能A", "機能B"], featured: false },
    { name: "スタンダード", price: "¥00,000", items: ["機能A", "機能B", "機能C"], featured: true },
    { name: "エンタープライズ", price: "お問い合わせ", items: ["全機能", "専任サポート"], featured: false },
  ],
};

export const contact = {
  title: "お問い合わせ",
  lead: "ご質問・資料請求はお気軽にどうぞ。",
};
