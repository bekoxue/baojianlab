import type { Metadata } from "next";
import { Noto_Serif_SC, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "宝坚实验室",
    template: "%s | 宝坚实验室",
  },
  description: "一个对 AI 充满好奇的探索者，用代码把想法变成现实。",
  metadataBase: new URL("https://baojianlab.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-serif antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
