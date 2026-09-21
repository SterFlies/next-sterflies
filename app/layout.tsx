
import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import PageWrapper from "@/app/components/PageWrapper";
import OrganizationJsonLd from "@/app/components/seo/OrganizationJsonLd";
import { defaultOgImage, siteConfig } from "@/app/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SterFlies | Forensic Mapping & Reality Capture",
    template: "%s",
  },
  description:
    "Technical field documentation, forensic mapping, photogrammetry, reality capture, thermal imaging, and site documentation for investigations, construction, and industrial work.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    images: [defaultOgImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        {/* Mailchimp Connected Sites — only include in production */}
        {process.env.NODE_ENV === "production" && (
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],
              m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}
              (document,"script","https://chimpstatic.com/mcjs-connected/js/users/014a7cec35ea7dc291dca3434/250acea60527471338be75f18.js");`,
            }}
          />
        )}
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <OrganizationJsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
