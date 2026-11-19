import {
  Newsreader,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  metadataBase: new URL("https://revpulsehealth.com"),
  title: {
    default:
      "Healthcare Revenue Cycle Management & Medical Billing SaaS | RevPulse Health",
    template: "%s | RevPulse Health",
  },
  description:
    "The Healthcare Revenue Platform for real-time adjudication. RevPulse Health's RevPulse Core combines automated medical billing SaaS, claim denial prevention, and expert RCM consulting.",
  keywords: [
    "RevPulse Health",
    "healthcare revenue cycle management",
    "medical billing software",
    "automated claim scrubbing",
    "claim denial management",
    "healthcare financial consulting",
    "prior authorization automation",
    "clinical documentation integrity",
  ],
  openGraph: {
    title:
      "Healthcare Revenue Cycle Management & Medical Billing SaaS | RevPulse Health",
    description:
      "Unifying cloud-native medical billing SaaS, automated claim scrubbing, and certified RCM consulting across 140+ health systems.",
    url: "https://revpulsehealth.com",
    siteName: "RevPulse Health",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1376,
        height: 768,
        alt: "Healthcare professionals walking through modern RevPulse Health clinical facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
