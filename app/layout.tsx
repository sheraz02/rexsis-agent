import { ThemeProvider } from '@/components/app/theme-provider';
import { ThemeToggle } from '@/components/app/theme-toggle';
import '@/styles/globals.css';
import { Fraunces, Manrope } from "next/font/google";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://rexsis.com"),

  title: {
    default: "Rexsis — Practice talking, out loud",
    template: "%s — Rexsis",
  },

  description:
    "Rexsis is an AI speaking coach you talk to, out loud. Have real voice conversations, get focused feedback, and practice until talking feels easier.",

  applicationName: "Rexsis",

  keywords: [
    "Rexsis",
    "AI speaking coach",
    "AI conversation practice",
    "speaking practice",
    "communication skills",
    "English speaking practice",
    "voice AI",
  ],

  authors: [
    {
      name: "Rexsis",
      url: "https://rexsis.com",
    },
  ],

  creator: "Rexsis",
  publisher: "Rexsis",

  alternates: {
    canonical: "https://rexsis.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rexsis.com",
    siteName: "Rexsis",
    title: "Rexsis — Practice talking, out loud",
    description:
      "Talk with an AI speaking coach, get focused feedback, and try again until talking feels easier.",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Rexsis — Practice talking, out loud",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rexsis — Practice talking, out loud",
    description:
      "Talk with an AI speaking coach, get focused feedback, and try again until talking feels easier.",
    images: ["/open-graph.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};


const display = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <head>
        <title>LiveKit Voice Agent</title>
        <meta name="description" content="A voice agent built with LiveKit" />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://rexsis.com"
              className="scale-100 transition-transform duration-300 hover:scale-110"
            >
              <img src="/rexsis-logo.png" alt="rexsis-logo" className="block size-10 dark:hidden" />
              <img
                src="/rexsis-logo-dark.png"
                alt="rexsis-logo"
                className="hidden size-10 dark:block"
              />
            </Link>
            <span>
              <ThemeToggle />
            </span>
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
