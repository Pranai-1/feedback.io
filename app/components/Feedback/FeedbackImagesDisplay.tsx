import Image from "next/image";

export default function FeedbackImagesDisplay({ images }: { images: string[] }) {
  return (
    <div className="flex justify-center items-center gap-8 w-full pl-4 flex-wrap">
      {images.map((image, idx) => (
        <Image
          src={image}
          alt={`image ${idx}`}
          key={idx}
          height={140}
          width={160}
          className="border border-gray-500 rounded-md p-2 sm:h-[120px] sm:w-[140px] md:h-[140px] md:w-[160px] lg:h-[160px] lg:w-[180px]"
        />
      ))}
    </div>
  );
}
