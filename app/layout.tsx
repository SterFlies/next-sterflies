
import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import PageWrapper from "@/app/components/PageWrapper";
import ScalableContainer from "@/app/components/ScalableContainer";
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
  title: "SterFlies",
  description: "Professional Drone & Thermal Imaging Services",
  icons: {
    icon: "/Logo-no-background_edited.ico",
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScalableContainer>
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ScalableContainer>
      </body>
    </html>
  );
}


