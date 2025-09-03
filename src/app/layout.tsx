import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Japanese Student Society | University of Sydney",
  description: "Official website of the University of Sydney Japanese Student Society (JSS). Events, membership, executive team, and student support. シドニー大学日本人学生会（JSS）公式サイト。",
  keywords: ["University of Sydney", "Japanese students", "student society", "JSS", "シドニー大学", "日本人学生会"],
  authors: [{ name: "Japanese Student Society" }],
  creator: "Japanese Student Society",
  publisher: "Japanese Student Society",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
    siteName: "Japanese Student Society",
    title: "Japanese Student Society | University of Sydney",
    description: "Official website of the University of Sydney Japanese Student Society (JSS). Events, membership, executive team, and student support.",
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
    title: "Japanese Student Society | University of Sydney",
    description: "Official website of the University of Sydney Japanese Student Society (JSS).",
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
        <link rel="preload" href="/assets/images/home/jss_main_icon.png" as="image" />
        <link rel="preload" href="/assets/images/common/jss_icon_navigation.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Japanese Student Society at University of Sydney",
              url: "https://www.usyd-jss.org/",
              logo: "https://www.usyd-jss.org/assets/images/common/jss_icon_navigation.png",
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
              },
              description: "Official student organization for Japanese students at the University of Sydney, fostering community and support.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
