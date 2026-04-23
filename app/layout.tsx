import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://rushikeshpandit.in"),
  title: {
    default: "Rushikesh Pandit — Senior Mobile & Full-Stack Engineer",
    template: "%s | Rushikesh Pandit",
  },
  description:
    "Freelance React Native, iOS (Swift/SwiftUI), and Elixir engineer with 10+ years shipping mobile apps across banking, e-commerce, and social. Based in Pune, India. Available for freelance and consulting.",
  keywords: [
    "React Native developer",
    "iOS developer India",
    "Swift developer freelance",
    "SwiftUI developer",
    "Elixir Phoenix developer",
    "mobile app developer Pune",
    "freelance mobile engineer",
    "React Native freelancer",
    "cross-platform app developer",
    "banking app developer",
    "mobile app consultant",
    "Rushikesh Pandit",
    "TypeScript developer",
    "Next.js developer",
    "open source React Native",
    "mobile CI/CD CircleCI Fastlane",
    "hire iOS developer",
    "hire React Native developer",
    "senior software engineer India",
  ],
  authors: [{ name: "Rushikesh Pandit", url: "https://rushikeshpandit.in" }],
  creator: "Rushikesh Pandit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rushikeshpandit.in",
    siteName: "Rushikesh Pandit",
    title: "Rushikesh Pandit — Senior Mobile & Full-Stack Engineer",
    description:
      "10+ years shipping React Native, iOS, and Elixir apps. Open to freelance and consulting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rushikesh Pandit — Senior Mobile Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Pandit — Senior Mobile & Full-Stack Engineer",
    description:
      "10+ years shipping React Native, iOS, and Elixir apps. Open to freelance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rushikeshpandit.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rushikesh Pandit",
  url: "https://rushikeshpandit.in",
  email: "rushikesh.d.pandit@gmail.com",
  jobTitle: "Senior Software Engineer",
  description:
    "Freelance React Native, iOS (Swift/SwiftUI), and Elixir engineer with 10+ years of experience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/rushikeshpandit",
    "https://www.linkedin.com/in/rushikesh-pandit-646834100/",
    "https://dev.to/rushikeshpandit",
  ],
  knowsAbout: [
    "React Native",
    "iOS Development",
    "Swift",
    "SwiftUI",
    "Elixir",
    "Phoenix Framework",
    "TypeScript",
    "JavaScript",
    "Mobile App Development",
    "CI/CD",
    "Fastlane",
    "CircleCI",
    "Next.js",
    "Flutter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="mesh-bg" aria-hidden="true" />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
