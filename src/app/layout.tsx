import type { Metadata } from "next";
import "./globals.scss";

import { SessionProvider } from "next-auth/react";
import { Nunito } from "next/font/google";

import { auth } from "../config/auth.config";
import { Providers } from "../shared/providers/Providers";

const nunito = Nunito({
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Hyper Cinema",
  description: "Offline cinema web-application builded on Next.js",
  authors: {
    name: "Oleksii Skotarenko",
    url: "oleksii.skotarenko@gmail.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionProvider session={session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
