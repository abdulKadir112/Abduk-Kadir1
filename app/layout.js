import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex justify-center items-center ${inter.className}`}>
         <div className="w-[1920px] h-screen flex overflow-hidden">
            <div>
              <Navbar/>
            </div>
            <div className="bg-slate-200 w-full h-full overflow-scroll md:overflow-hidden">
              {children}
            </div>
         </div>
      </body>
    </html>
  );
}
