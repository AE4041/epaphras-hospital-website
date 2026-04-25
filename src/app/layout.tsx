import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
const dmsans = DM_Sans({ subsets: ["latin"] });
import NextTopLoader from 'nextjs-toploader';
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Epaphras Hospital",
  description: "Epaphras Hospital",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Aoscompo>
              <Header />
              <NextTopLoader />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}