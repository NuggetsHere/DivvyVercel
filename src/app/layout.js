import "./globals.css";
import "./components/navbar"
import Navbar from "./components/navbar";

export const metadata = {
  title: "Divvy Computronix",
  description: "Your tech lifeline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-nebulica text-black w-full">
        <div className="h-full w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
