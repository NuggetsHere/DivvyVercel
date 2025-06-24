// import Link from 'next/link'


// export default function Navbar() {
//   return (
//       <div className="fixed w-screen top-4 flex flex-col z-50">
//       <nav className="w-[10/12] top-20 px-16 left-4 mx-16 my-4 rounded-full
//       bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
//       ">
//           <div className="flex justify-between items-center h-16">
//               <div className="flex items-center">
//                   <Link href="/" className="text-xl font-bold">DivComp.</Link>
//               </div>
//               <div className="flex items-center">
//                   <Link href="/#faqs" className="text-md ml-10">FAQs</Link>
//                   <Link href="/services" className="text-md ml-10">Services</Link>
//                   <Link href="/about" className="text-md ml-10">About</Link>
//                   <Link href="/contact" className="text-md ml-10">Contact</Link>
//                   <Link href="/blogs" className="text-md ml-10">Blogs</Link>

//               </div>
//           </div>
//       </nav>
//       </div>
//   )
// }



// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from 'next/link'


// // const Navbar = () => {
// //   const [bgColor, setBgColor] = useState("bg-gray-500 bg-opacity-10 backdrop-blur backdrop-filter backdrop-saturate-100 backdrop-contrast-100");
// //   const [textColor, setTextColor] = useState("text-black");

// //   const handleScroll = () => {
// //     const sections = document.querySelectorAll(".section");
// //     let found = false;

// //     sections.forEach((section) => {
// //       const rect = section.getBoundingClientRect();
// //       if (rect.top <= 0 && rect.bottom > 0) {
// //         if (section.classList.contains("bg-white")) {
// //           setBgColor("bg-black");
// //           setTextColor("text-white");
// //         } else if (section.classList.contains("bg-black")) {
// //           setBgColor("bg-white");
// //           setTextColor("text-black");
// //         }
// //         found = true;
// //       }
// //     });

// //     if (!found) {
// //       setBgColor("bg-gray-500");
// //       setTextColor("text-white");
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <nav
// //       className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[10/12] lg:w-[95%] ${bgColor} ${textColor} rounded-full px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100 transition-all duration-300`}
// //     >
// //       <div className="flex justify-between items-center max-w-7xl mx-auto">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <Link href="/" className="text-xl font-bold">
// //             DivComp.
// //           </Link>
// //         </div>

// //         {/* Nav Links */}
// //         <div className="flex items-center">
// //           <Link href="/#faq" className="text-md ml-10">FAQs</Link>
// //           <Link href="/services" className="text-md ml-10">Services</Link>
// //           <Link href="/about" className="text-md ml-10">About</Link>
// //           <Link href="/contact" className="text-md ml-10">Contact</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // uses lucide icons
import Image from 'next/image';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-screen top-4 z-50 px-4">
      <nav className="w-[10/12] top-20 px-16 left-4 mx-auto md:mx-16 my-4 rounded-full
        bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
        flex justify-between items-center h-16">
          
        
        {/* Logo */}
        <Link href="/" id='logo'>
        <Image src="/divvylogo-nav.svg" height={50} width={40} alt='divvy-logo'/>
        </Link>
        

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-md">
          <Link href="/#faqs">FAQs</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Open Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-6 py-4 mx-auto max-w-6xl rounded-xl
          bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
          flex flex-col space-y-4 text-md">
          <Link href="/#faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        </div>
      )}
    </div>
  );
}
