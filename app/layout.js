import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/services/globalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { siteTitle } from "@/utils/content/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${siteTitle} | Look after your movies`,
  description: "A movies website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
