import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/button";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import nebulica from '/public/fonts/nebulica-regular';

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
      <body>
        <Analytics mode="production" />
        <SpeedInsights />
        <div className="h-full w-full">
          <Navbar />
        </div>
        {children}
        <div className="fixed bottom-0 right-0 pb-8 pr-8 z-50">
          <WhatsAppButton />
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
