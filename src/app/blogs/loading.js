export default function Loading() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-20 pt-[120px]">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black text-center">
        
        </h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-gray-200 p-4 shadow animate-pulse"
            >
              {/* Image shimmer */}
              <div className="bg-gray-300 h-52 w-full rounded-md"></div>

              <div className="mt-4 space-y-3">
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-full rounded"></div>
                <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
              </div>

              {/* author section */}
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="bg-gray-300 h-4 w-24 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
