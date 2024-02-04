import type { Metadata } from "next";
import "@/UI/styles/globals.css";

import { Anek_Bangla, Oxanium } from "next/font/google";
import MainLayout from "@/UI/layouts/MainLayout";
import Background from "@/UI/atoms/Background";

const anek = Anek_Bangla({
   subsets: ["latin"],
   variable: "--anek",
});

const oxanium = Oxanium({
   subsets: ["latin"],
   variable: "--oxanium",
});

export const metadata: Metadata = {
   title: "Timer",
   description:
      "In this website you are going to find a timer with a start, stop, and reset button. You can also take laps and see the time of each lap.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${oxanium.variable} ${anek.variable}`}>
            <Background />
            <MainLayout>{children}</MainLayout>
         </body>
      </html>
   );
}
