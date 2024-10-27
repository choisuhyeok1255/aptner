import localFont from "next/font/local";
import type { Metadata } from "next";

import Header from "@/components/header/Header";
import Provider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "아파트너_최수혁",
  description: "프론트 개발 직무 과제 테스트",
  openGraph: {
    title: "아파트너_최수혁",
    description: "프론트 개발 직무 과제 테스트",
    // url: "", // 사이트 도메인
    // images: [{ url: "" }], // 미리보기 이미지
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <Header />
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
