import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pageComponents/Navbar";
import { GlobalContextProvider } from "@/services/globalContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata = {
  title: "MovieStry",
  description: "Community for movies",
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${leagueSpartan.variable} font-inter`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </GlobalContextProvider>
  );
}
