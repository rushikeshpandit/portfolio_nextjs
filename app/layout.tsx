import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import AmbientSphere from "../components/AmbientSphere";

export const metadata: Metadata = {
  metadataBase: new URL("https://rushikeshpandit.in"),
  title: {
    default: "Rushikesh Pandit — Freelance Full-Stack, React Native & iOS Engineer",
    template: "%s | Rushikesh Pandit",
  },
  description:
    "Rushikesh Pandit is a freelance full-stack engineer, React Native developer, iOS app developer, and mobile product engineer based in Pune, India. Available for product engineering, mobile app development, web app development, SaaS builds, and UI/UX-focused engineering work.",
  keywords: [
    "Rushikesh Pandit",
    "freelance full stack developer",
    "freelance React Native developer",
    "iOS developer India",
    "Swift developer freelance",
    "SwiftUI developer",
    "Next.js developer",
    "TypeScript developer",
    "mobile app developer Pune",
    "software engineer Pune India",
    "full stack engineer India",
    "React Native app developer",
    "iOS app development company",
    "mobile app consultant",
    "SaaS developer",
    "web app developer",
    "UI UX developer",
    "Elixir developer",
    "Phoenix framework developer",
    "mobile product engineer",
    "hire React Native developer",
    "hire iOS developer",
    "hire full stack developer",
    "React Native freelancer",
    "freelance mobile app developer",
    "full stack developer for startups",
    "banking app developer",
    "cross-platform app developer",
    "product engineering consultant",
    "React Native engineer India",
    "Pune software engineer",
    "React Native QR scanner",
    "React Native barcode scanner",
    "native QR camera library",
    "senior software engineer India",
    "senior React Native developer",
    "senior iOS engineer",
    "freelance software engineer India",
    "freelance web developer Pune",
    "freelance iOS developer",
    "hire freelance developer India",
    "hire Next.js developer",
    "hire Elixir developer",
    "hire mobile app developer",
    "remote React Native developer",
    "remote full stack developer",
    "mobile app development services",
    "custom web application development",
    "MVP development for startups",
    "startup technical partner",
    "app development consultant India",
    "Swift iOS app development",
    "React Native app development services",
    "Next.js web development services",
    "Phoenix LiveView developer",
    "Elixir backend developer",
    "TypeScript React developer",
    "REST API development",
    "fintech app developer",
    "e-commerce app developer",
    "mobile app UI UX engineering",
    "app store deployment and CI/CD",
    "React Native performance optimization",
    "React Native developer portfolio",
    "software engineer portfolio India",
    "end-to-end product development",
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
      "11+ years shipping React Native, iOS, and Elixir apps. Open to freelance and consulting.",
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
      "11+ years shipping React Native, iOS, and Elixir apps. Open to freelance.",
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
  "@type": ["Person", "ProfessionalService"],
  name: "Rushikesh Pandit",
  url: "https://rushikeshpandit.in",
  email: "rushikesh.d.pandit@gmail.com",
  jobTitle: "Senior Full-Stack & Mobile App Engineer",
  description:
    "Freelance full-stack engineer, React Native developer, iOS app developer, and product engineer helping startups and businesses ship scalable digital products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
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
    "Next.js",
    "Flutter",
    "Mobile App Development",
    "Web App Development",
    "UI/UX Engineering",
    "Product Engineering",
    "SaaS Development",
    "CI/CD",
    "Fastlane",
    "CircleCI",
    "QR code scanning",
    "Native camera APIs",
    "Mobile App Development Services",
    "Custom Web Application Development",
    "MVP Development for Startups",
    "Phoenix LiveView",
    "Elixir Backend Development",
    "REST API Development",
    "Fintech App Development",
    "E-commerce App Development",
    "React Native Performance Optimization",
    "App Store Deployment",
    "Technical Consulting",
    "End-to-End Product Development",
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
          <AmbientSphere />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
