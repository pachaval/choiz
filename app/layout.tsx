import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Challenge realizado por Pablo Achaval",
  title: "Pulppo Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <main className="flex-row items-center mx-20 my-10 mb-40">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
