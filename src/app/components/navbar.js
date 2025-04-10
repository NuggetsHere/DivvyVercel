// 'use client'
// import { useEffect, useState } from 'react';

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             setIsScrolled(scrollY > 50); // adjust value as needed
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="fixed w-screen top-4 flex flex-col z-50 transition-colors duration-300">
//             <nav className={`
//                 w-[95%] mx-auto my-4 px-8 py-2 rounded-full
//                 backdrop-blur bg-opacity-10
//                 transition-colors duration-300
//                 ${isScrolled ? 'bg-white text-white shadow-md' : 'bg-gray-500 text-black'}
//             `}>
//                 <div className="flex justify-between items-center h-16">
//                     <div className="flex items-center">
//                         <a href="/" className="text-xl font-bold">DivComp.</a>
//                     </div>
//                     <div className="flex items-center space-x-10 text-md">
//                         <a href="/contact">FAQs</a>
//                         <a href="/contact">Services</a>
//                         <a href="/about">About</a>
//                         <a href="/contact">Contact</a>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }




// export default function Navbar() {
//     return (
//         <div className="fixed w-screen top-4 flex flex-col z-50">
//         <nav className="w-[10/12] top-20 px-16 left-4 mx-16 my-4 rounded-full
//         bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
//         ">
//             <div className="flex justify-between items-center h-16">
//                 <div className="flex items-center">
//                     <a href="/" className="text-xl font-bold">DivComp.</a>
//                 </div>
//                 <div className="flex items-center">
//                     <a href="/contact" className="text-md ml-10">FAQs</a>
//                     <a href="/contact" className="text-md ml-10">Services</a>
//                     <a href="/about" className="text-md ml-10">About</a>
//                     <a href="/contact" className="text-md ml-10">Contact</a>
//                     <a href="/blogs" className="text-md ml-10">Blogs</a>
//                 </div>
//             </div>
//         </nav>
//         </div>
//     )
//}



export default function Navbar() {
    return (
        <div className="fixed w-screen top-4 flex flex-col z-50">
            <nav className="w-[95%] mx-auto my-4 px-8 py-2 rounded-full
                bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
            ">
                <div className="flex justify-between items-center h-16">
                    {/* Logo section */}
                    <div className="flex items-center">
                        <a href="/">
                            <img 
                                src="/logo.png" // <-- Update this path to match your file structure
                                className="h-10 w-auto object-contain" // Adjust size as needed
                            />
                        </a>
                    </div>

                    {/* Nav links */}
                    <div className="flex items-center">
                        <a href="/contact" className="text-md ml-10">FAQs</a>
                        <a href="/contact" className="text-md ml-10">Services</a>
                        <a href="/about" className="text-md ml-10">About</a>
                        <a href="/contact" className="text-md ml-10">Contact</a>
                        <a href="/blogs" className="text-md ml-10">Blogs</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
