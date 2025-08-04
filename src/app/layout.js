
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Nav, { Header } from "./components/Nav";
import ClientProvider from "@/app/store/provider";
import Authmodal from "./components/Authmodal";
import LoadingPage from "./components/LoadingPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Instagram",
  description: "Instagram Clone",
};
//${geistSans.variable} ${geistMono.variable}

export default function RootLayout({ children }) {
  
  return (

    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased `}
      >
        <ClientProvider >

          <div className="flex w-full h-full relative max-md:block ">
            <Sidebar />
            <Nav />
            <Header />
            {children}

          </div>
          <Authmodal />
          <LoadingPage />
        </ClientProvider>
      </body>
    </html>
  );
}
