import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/services/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moviestry | Look after your movies",
  description: "A movies website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>{children}</body>
      </GlobalContextProvider>
    </html>
  );
}
