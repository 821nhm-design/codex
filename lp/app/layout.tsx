import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
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
