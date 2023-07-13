import { RootStyleRegistry } from "./emotion";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koding Books",
  description: "A collection of books for learning to code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
