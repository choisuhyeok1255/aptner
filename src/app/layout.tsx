import { Noto_Sans_KR } from "next/font/google";

import type { Metadata } from "next";

import Header from "@/components/header/Header";
import Provider from "./provider";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
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
      <body className={notoSansKR.className}>
        <main>
          <Header />
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
