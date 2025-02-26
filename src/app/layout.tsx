'use client'

import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

// export const metadata: Metadata = {
//   title: "Luck Box",
//   description: "A trading box that generates consistent daily profits.",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
