import "./globals.css";
import "./components/navbar"
import Navbar from "./components/navbar";
import nebulica from '/public/fonts/nebulica-regular';

export const metadata = {
  title: "Divvy Computronix",
  description: "Your tech lifeline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nebulica.className}>
      <body >
        <div className="h-full w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
