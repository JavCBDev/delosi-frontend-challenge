import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <nav>
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white hover:text-fuchsia-500">
            Delosi
          </Link>
          <a
            href="https://github.com/JavCBDev/delosi-frontend-challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition"
            aria-label="GitHub"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.53-1.35-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.53-2.56-.29-5.26-1.29-5.26-5.73 0-1.27.45-2.32 1.19-3.14-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 2.88-.39c.98 0 1.97.13 2.89.39 2.19-1.5 3.16-1.19 3.16-1.19.63 1.59.23 2.77.11 3.06.74.82 1.19 1.87 1.19 3.14 0 4.46-2.7 5.43-5.28 5.71.41.36.77 1.07.77 2.16v3.2c0 .31.21.67.8.56A10.997 10.997 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}