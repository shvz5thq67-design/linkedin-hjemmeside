import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Schou — Product Owner & AI Consultant",
  description: "Product Owner and AI Consultant based in Aarhus. Bridging business and technology at DP World and A.P. Moller - Maersk.",
  openGraph: {
    title: "Christian Schou — Product Owner & AI Consultant",
    description: "I bridge business and technology — and I make AI work in the real world.",
    type: "website",
    locale: "en_DK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
