export default function Navbar() {
  return (
      <div className="fixed w-screen top-4 flex flex-col z-50">
      <nav className="w-[10/12] top-20 px-16 left-4 mx-16 my-4 rounded-full
      bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
      ">
          <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                  <a href="/" className="text-xl font-bold">DivComp.</a>
              </div>
              <div className="flex items-center">
                  <a href="/contact" className="text-md ml-10">FAQs</a>
                  <a href="/services" className="text-md ml-10">Services</a>
                  <a href="/about" className="text-md ml-10">About</a>
                  <a href="/contact" className="text-md ml-10">Contact</a>
              </div>
          </div>
      </nav>
      </div>
  )
}