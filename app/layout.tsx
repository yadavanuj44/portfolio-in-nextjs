import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} bg-zinc-50 text-zinc-950 relative w-[100dvw] h-[100dvh]`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 rounded-full blur-[10rem] w-[50%] h-[50%] top-0 left-0"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 rounded-full blur-[10rem] w-[50%] h-[50%] top-0 right-0"></div>
        {children}
      </body>
    </html>
  );
}
