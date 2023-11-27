import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgetown Hoyas Event Page",
  description: "Georgetown Event Page clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
