import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air India 171 Memorial",
  description:
    "Tributes, passenger information, and resources for those affected.",
  openGraph: {
    title: "Air India 171 Memorial",
    description:
      "Pay homage and find official resources after the Flight 171 tragedy.",
    url: "https://airindia171.org",
    siteName: "Air India 171 Memorial",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
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
