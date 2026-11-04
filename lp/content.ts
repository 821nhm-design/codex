/**
 * LP に表示する文章・数値をまとめたファイル。
 * 内容は Ping Pong Master アプリ（821nhm-design/ping-pong-master）の
 * 収録データ・料金設定（lib/premium-utils.ts など）に合わせている。
 */

export const site = {
  name: "Ping Pong Master",
  title: "Ping Pong Master | 卓球学習アプリ",
  description:
    "技術の打ち方、練習メニュー、体幹トレーニング、用語辞典、プロ選手の戦術まで。卓球の上達に必要な知識をまとめた学習アプリです。",
};

export const nav = [
  { href: "#features", label: "特徴" },
  { href: "#results", label: "収録数" },
  { href: "#pricing", label: "料金" },
  { href: "#contact", label: "お問い合わせ" },
];

export const hero = {
  eyebrow: "卓球学習アプリ",
  title: "卓球の「わからない」を、ひとつのアプリで。",
  lead:
    "技術の打ち方、練習メニュー、体幹トレーニング、用語、プロ選手の戦術まで。初心者から中級者の上達に必要な知識を、スマホひとつで学べます。",
  primaryCta: { href: "#pricing", label: "7日間無料で試す" },
  secondaryCta: { href: "#features", label: "できることを見る" },
  image: { src: "/logo.png", alt: "Ping Pong Master のアプリアイコン" },
};

export const features = {
  title: "特徴",
  lead: "練習前の確認にも、試合の研究にも使えます。",
  items: [
    {
      title: "技術を「概要・打ち方・プロ選手」で学ぶ",
      body: "ドライブ、ツッツキ、サーブなど16種類の基本技術を、使う場面・打ち方の手順・お手本になるプロ選手の3つの視点で解説します。",
    },
    {
      title: "レベル別の練習メニューと体幹トレーニング",
      body: "初級・中級・上級に分かれた練習メニューと体幹トレーニングを収録。1球練習・多球練習・ランダム練習の違いもわかります。",
    },
    {
      title: "用語辞典とプロ選手データ",
      body: "ルール・道具・技術・戦術の用語127語を検索できます。世界ランキング上位100名のプロ選手の得意な戦術も確認できます。",
    },
  ],
};

export const results = {
  title: "収録コンテンツ",
  note: "※ Pro 版の収録数です。無料版では一部を利用できます。",
  items: [
    { value: 16, suffix: "種類", label: "基本技術" },
    { value: 127, suffix: "語", label: "卓球用語" },
    { value: 74, suffix: "メニュー", label: "練習・体幹トレーニング" },
    { value: 100, suffix: "名", label: "プロ選手" },
  ],
};

export const pricing = {
  title: "料金",
  lead: "Pro は一度の購入でずっと使える買い切り型です。月額料金はかかりません。",
  plans: [
    {
      name: "無料版",
      price: "¥0",
      period: "",
      badge: "",
      items: [
        "基本技術 5種類",
        "用語辞典 30語",
        "練習メニュー 10個",
        "体幹トレーニング 10個",
        "プロ選手 ランキング1〜10位",
      ],
      featured: false,
    },
    {
      name: "Ping Pong Master Pro",
      price: "¥1,500",
      period: "買い切り",
      badge: "7日間無料トライアル",
      items: [
        "すべての技術・用語・メニューが使い放題",
        "プロ選手 全100名の情報",
        "今後追加されるコンテンツも追加料金なし",
        "購入前に7日間、すべての機能を無料で試せる",
      ],
      featured: true,
    },
  ],
};

export const contact = {
  title: "お問い合わせ",
  lead: "アプリへのご質問・ご要望はこちらからどうぞ。",
};
