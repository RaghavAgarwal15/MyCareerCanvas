'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import FilterState from "./context/filterState";
import { useRouter } from "next/navigation";
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import dynamic from "next/dynamic";
// import Chatbot from "./components/Chatbot";
const inter = Inter({ subsets: ["latin"] });

const Chatbot = dynamic(() => import('./components/Chatbot'), { ssr: false });

export default function RootLayout({ children }) {
  const router  = useRouter();
  
  const languages =  {
    English : '/auto/en',
    Assamese : '/auto/as',
    Bengali : '/auto/bn',
    Gujarati : '/auto/gu',
    Hindi : '/auto/hi',
    Kannada : '/auto/kn',
    Konkani : '/auto/kok',
    Malayalam : '/auto/ml',
    Marathi : '/auto/mr',
    Nepali : '/auto/ne',
    Oriya : '/auto/or',
    Punjabi : '/auto/pa',
    Sanskrit : '/auto/sa',
    Sindhi : '/auto/sd',
    Tamil : '/auto/ta',
    Telugu : '/auto/te',
    Urdu : '/auto/ur',
    Maithili : '/auto/mai',
    Dogri : '/auto/doi'
  }

    // console.log(languages['English']);
 
    const langChange = (lang) => {
      console.log("done");
      // if (hasCookie('googtrans')) {
          setCookie('googtrans', languages[lang]);
          // setSelected(e)
      // }
      window.location.reload()
  }

  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={inter.className}>
          <FilterState>

            {children}
            <Chatbot/>
          </FilterState>
       
      </body>
    </html>
  );
}
