import type { Metadata } from "next";
import { ThemeProviderWrapper } from './theme-provider';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Rachel McDermott",
  description: "Rachel McDermott portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
