export default function Loading() {
  return (
    <main className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 py-16 mt-20 animate-pulse">
      <article className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="h-10 md:h-14 bg-gray-300 rounded w-3/4 mx-auto mb-8"></div>

        {/* Author section */}
        <div className="flex items-center justify-center space-x-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-3 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Banner image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl h-[300px] md:h-[420px] bg-gray-300 rounded-xl"></div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-11/12"></div>
          <div className="h-4 bg-gray-300 rounded w-10/12"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-9/12"></div>
        </div>

        {/* Author bio */}
        <div className="border-t pt-10 mt-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
              <div className="h-3 w-72 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

      </article>
    </main>
  );
}
