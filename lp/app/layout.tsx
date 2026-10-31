import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "サービス名 | キャッチコピーが入ります",
  description: "サービスの説明文が入ります（プレースホルダー）。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
