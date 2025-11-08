import Image from "next/image";
import Link from "next/link";

interface CardProps {
  description: string;
  href: string;
  imageUrl: string;
  title: string;
}

export default function Card({ href, imageUrl, title, description }: CardProps) {
  return (
    <Link href={href} passHref className="block max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all  duration-300 cursor-pointer">
      <div className="flex justify-center p-4 bg-gray-50">
        <Image width={150} height={150} src={imageUrl} alt={title} className="rounded-full object-cover"/>
      </div>
      <div className="px-6 py-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  )
}