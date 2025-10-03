import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Japanese Student Society | University of Sydney | Sydney Japanese Community",
  description: "Official University of Sydney Japanese Student Society (JSS). Sydney's premier Japanese student community offering events, cultural activities, networking, and support for Japanese students in Sydney. シドニー大学日本人学生会（JSS）- シドニーの日本人学生コミュニティ。",
  keywords: [
    "University of Sydney Japanese", "Sydney Japanese students", "Japanese student society Sydney",
    "USYD Japanese", "Sydney Japanese community", "Japanese students Australia", "JSS USYD",
    "University of Sydney international students", "Sydney university Japanese club",
    "Japanese society Sydney", "日本人学生会", "シドニー大学", "シドニー日本人学生",
    "オーストラリア日本人留学生", "USYD JSS", "Sydney Japanese events"
  ],
  authors: [{ name: "Japanese Student Society" }],
  creator: "Japanese Student Society",
  publisher: "Japanese Student Society",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.usyd-jss.org/",
    siteName: "Japanese Student Society Sydney",
    title: "Japanese Student Society | University of Sydney | Sydney Japanese Community",
    description: "Official University of Sydney Japanese Student Society (JSS). Sydney's premier Japanese student community offering events, cultural activities, networking, and support for Japanese students in Sydney.",
    images: [
      {
        url: "https://www.usyd-jss.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Japanese Student Society Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Student Society | University of Sydney | Sydney Japanese Community",
    description: "Sydney's premier Japanese student community at University of Sydney. Events, cultural activities, and support for Japanese students in Sydney.",
    images: ["https://www.usyd-jss.org/og-image.jpg"],
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
  verification: {
    google: "google62829d9d79c8c375",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.usyd-jss.org/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JSS USYD" />
        <link rel="preload" href="/assets/images/home/jss_main_icon.png" as="image" />
        <link rel="preload" href="/assets/images/common/jss_icon_navigation.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.usyd-jss.org/#organization",
              name: "Japanese Student Society at University of Sydney",
              alternateName: ["JSS USYD", "University of Sydney Japanese Student Society", "USYD JSS"],
              url: "https://www.usyd-jss.org/",
              logo: {
                "@type": "ImageObject",
                url: "https://www.usyd-jss.org/assets/images/common/jss_icon_navigation.png",
                width: 200,
                height: 200
              },
              image: "https://www.usyd-jss.org/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/jss_usyd/",
                "https://www.linkedin.com/company/japanese-student-society-the-university-of-sydney/",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Australia",
                addressRegion: "NSW",
                postalCode: "2006",
                addressLocality: "Sydney",
                streetAddress: "University of Sydney"
              },
              description: "Official student organization for Japanese students at the University of Sydney. Sydney's premier Japanese student community offering events, cultural activities, networking, and support.",
              keywords: "Japanese students Sydney, University of Sydney Japanese, Sydney Japanese community, Japanese student society",
              memberOf: {
                "@type": "Organization",
                name: "University of Sydney",
                url: "https://www.sydney.edu.au/"
              },
              areaServed: {
                "@type": "Place",
                name: "Sydney, Australia"
              },
              audience: {
                "@type": "Audience",
                audienceType: "Japanese students, University of Sydney students, International students"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
