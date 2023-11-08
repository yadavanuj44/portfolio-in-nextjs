import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anuj Yadav | Portfolio",
  description:
    "Anuj is a full-stack developer with more than 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-950 relative pt-28 sm:pt-36 h-[5000px]`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 rounded-full blur-[10rem] w-[50%] h-[32rem] top-0 left-0"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 rounded-full blur-[10rem] w-[50%] h-[32rem] top-0 right-0"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
