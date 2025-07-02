// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Footer() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full mt-8 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
      
//       {/* Grid layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 px-6 md:px-12 py-12 text-center md:text-left items-start">
        
//         {/* Logo & Brand */}
//         <div className="flex flex-col items-center md:items-start col-span-1">
//           <Image
//             src="/divvylogo-nav.svg"
//             height={100}
//             width={100}
//             alt="divvy-logo"
//             className="mb-2"
//           />
//           <p className="text-xl font-bold mb-1">Divvy Computronix</p>
//           <p className="text-sm text-gray-700 mb-4">Your Tech Lifeline</p>
//           <Link href="tel:+919312247627">
//             <button
//               type="button"
//               className="flex justify-center gap-2 items-center text-sm bg-gray-50 backdrop-blur-md font-semibold border border-gray-50 
//               before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
//               before:rounded-full before:bg-[#e0f2fe] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 
//               before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
//             >
//               Contact Us
//               <svg
//                 className="w-6 h-6 group-hover:rotate-90 text-gray-800 ease-linear duration-300 rounded-full border border-gray-700 p-1 rotate-45"
//                 viewBox="0 0 16 19"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                   className="fill-gray-800 group-hover:fill-gray-800"
//                 />
//               </svg>
//             </button>
//           </Link>
//         </div>

//         {/* Quick Links */}
//         <div className="col-span-1">
//           <p className="font-semibold text-lg mb-3">Quick Links</p>
//           <ul className="space-y-2 text-sm text-gray-800">
//             <li><Link href="/services" className="hover:underline">Services</Link></li>
//             <li><Link href="/about" className="hover:underline">About</Link></li>
//             <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
//             <li><Link href="/contact" className="hover:underline">Support</Link></li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div className="col-span-1">
//           <p className="font-semibold text-lg mb-3">Socials</p>
//           <ul className="space-y-2 text-sm text-gray-800">
//             <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
//             <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
//             <li><a href="https://wa.me/919312247627" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
//             <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
//             <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="lg:col-span-2 col-span-1">
//           <p className="font-semibold text-lg mb-3">Subscribe to Updates</p>
//           <p className="text-sm text-gray-700 mb-4">Get tech tips, service updates & offers in your inbox.</p>
//           <div className="flex flex-col sm:flex-row gap-3 w-full">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 rounded-full bg-white/70 border border-gray-300 w-full sm:w-2/3"
//             />
//             <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-all">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Service Areas */}
//         <div className="col-span-1">
//           <p className="font-semibold text-lg mb-3">Service Areas</p>
//           <ul className="space-y-2 text-sm text-gray-800">
//             <li>Nehru Place (Service Center)</li>
//             <li>South Delhi</li>
//             <li>North Delhi</li>
//             <li>East Delhi</li>
//             <li>West Delhi</li>
//             <li>Central Delhi</li>
//             <li>Noida</li>
//             <li>Gurugram</li>
//             <li>Faridabad</li>
//           </ul>
//         </div>
//       </div>

//       {/* Coverage Note for SEO */}
//       <div className="px-6 md:px-12 pb-6 text-center text-sm text-gray-800">
//         <p>
//           Based in <strong>Nehru Place</strong>, we offer doorstep laptop, MacBook, and phone repair services across all of <strong>Delhi NCR</strong> — including South, North, East, West, and Central Delhi, Noida, Gurugram, and Faridabad.
//         </p>
//       </div>

//       {/* Divider */}
//       <hr className="w-[90%] mx-auto border-t border-gray-300" />

//       {/* Footer Bottom */}
//       <div className="text-sm text-center py-5 text-gray-800 px-4">
//         © 2025 | Divvy Computronix | Built by{' '}
//         <Link href="https://aidasolutions.tech" className="underline">AIDA Solutions</Link>
//       </div>
//     </div>
//   );
// }



'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mt-8 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 px-6 md:px-12 py-12 text-center md:text-left items-start">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <Image
            src="/divvylogo-nav.svg"
            height={100}
            width={100}
            alt="divvy-logo"
            className="mb-2"
          />
          <p className="text-xl font-bold mb-1">Divvy Computronix</p>
          <p className="text-sm text-gray-700 mb-4">Your Tech Lifeline</p>
          <Link href="tel:+919312247627">
            <button
              type="button"
              className="flex justify-center gap-2 items-center text-sm bg-gray-50 backdrop-blur-md font-semibold border border-gray-50 
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
              before:rounded-full before:bg-[#e0f2fe] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 
              before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
            >
              Contact Us
              <svg
                className="w-6 h-6 group-hover:rotate-90 text-gray-800 ease-linear duration-300 rounded-full border border-gray-700 p-1 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <p className="font-semibold text-lg mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
            <li><Link href="/contact" className="hover:underline">Support</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="col-span-1">
          <p className="font-semibold text-lg mb-3">Socials</p>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://wa.me/919312247627" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Service Areas */}
        <div className="col-span-1">
          <p className="font-semibold text-lg mb-3">Service Areas</p>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Nehru Place (Service Center)</li>
            <li>South Delhi</li>
            <li>North Delhi</li>
            <li>East Delhi</li>
            <li>West Delhi</li>
            <li>Central Delhi</li>
            <li>Noida</li>
            <li>Gurugram</li>
            <li>Faridabad</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2 col-span-1">
          <p className="font-semibold text-lg mb-3">Subscribe to Updates</p>
          <p className="text-sm text-gray-700 mb-4">Get tech tips, service updates & offers in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-white/70 border border-gray-300 w-full sm:w-2/3"
            />
            <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Coverage Note for SEO */}
      <div className="px-6 md:px-12 pb-6 text-center text-sm text-gray-800">
        <p>
          Based in <strong>Nehru Place</strong>, we offer doorstep laptop, MacBook, and phone repair services across all of <strong>Delhi NCR</strong> — including South, North, East, West, and Central Delhi, Noida, Gurugram, and Faridabad.
        </p>
      </div>

      {/* Divider */}
      <hr className="w-[90%] mx-auto border-t border-gray-300" />

      {/* Footer Bottom */}
      <div className="text-sm text-center py-5 text-gray-800 px-4">
        © 2025 | Divvy Computronix | Built by{' '}
        <Link href="https://aidasolutions.tech" className="underline">AIDA Solutions</Link>
      </div>
    </div>
  );
}
