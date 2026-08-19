import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ganga Marketing Agency — Performance Marketing in Nepal",
  description:
    "Meta Ads, SEO, Social Media Handling, Website Creation and Video Ads. Growth marketing for brands that refuse to blend in. Based in Nepal.",
  keywords: [
    "Ganga Marketing Agency",
    "Meta Ads",
    "SEO Nepal",
    "Social Media Marketing",
    "Website Creation",
    "Video Ads",
  ],
  openGraph: {
    title: "Ganga Marketing Agency — Performance Marketing in Nepal",
    description: "Paid ads, SEO and social that turn clicks into customers.",
    url: "https://gangamarketingagency.com.np",
    siteName: "Ganga Marketing Agency",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF9",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}