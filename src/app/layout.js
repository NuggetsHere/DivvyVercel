import "./globals.css";
import "./components/navbar"
import Navbar from "./components/navbar";
import nebulica from '/public/fonts/nebulica-regular';
import Head from "next/head";
import Footer from "./components/footer";
import WhatsAppButton from "./components/button";


export const metadata = {
  title: "Divvy Computronix",
  description: "Your tech lifeline",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nebulica.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body >
        <div className="h-full w-full">
          <Navbar />
          </div>
          {children}
        <div className="fixed top-[500px] right-0 left-0 h-full w-full">
         <WhatsAppButton />
        </div>
        

        <div>
          <Footer />
        </div>

      </body>
    </html>
  );
}
