import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { Red_Hat_Display } from "next/font/google";
import theme from "./theme";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import BacktoTop from "@/components/ui/BacktoTop";
import "lenis/dist/lenis.css";
import "@mantine/carousel/styles.css";
import LenisProvider from "../../type/LenisProvider";
import { Header } from "@/components/header/Header";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={redHatDisplay.variable}>
        <MantineProvider theme={theme}>
          <Header />
          <LenisProvider childrens={children} />
          <BacktoTop />
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
