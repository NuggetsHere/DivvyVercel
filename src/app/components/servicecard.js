import Image from 'next/image';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center h-50">
      {/* Uniform Icon Container */}
      <div className="h-[60px] w-[60px] mb-3 flex items-center justify-center rounded-full ">
        <Image
          src={icon}
          alt={title}
          width={55}
          height={55}
          className="object-contain max-h-full"
        />
      </div>

      {/* Title and Description */}
      <h3 className="font-medium text-sm mb-1">{title}</h3>
      <p className="text-[11px] text-gray-600 leading-snug">{description}</p>
    </div>
  );
}
