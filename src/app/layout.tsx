import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포트폴리오 | 웹 개발자",
  description: "웹 개발자 포트폴리오 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-bold">Portfolio</a>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-500">Home</a>
                <a href="#" className="hover:text-blue-500">About</a>
                <a href="#" className="hover:text-blue-500">Skills</a>
                <a href="#" className="hover:text-blue-500">Projects</a>
                <a href="#" className="hover:text-blue-500">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
