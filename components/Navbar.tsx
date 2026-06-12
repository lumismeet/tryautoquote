"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavbarProps = {
  onQuoteClick?: () => void;
};

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const router = useRouter();

  const handleQuote = () => {
    window.dispatchEvent(new CustomEvent("highlight-quote-input"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">

        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="relative w-8 h-8 md:w-9 md:h-9">
            <Image
              src="/logo_try.svg"
              alt="TryAutoQuote logo"
              fill
              className="object-contain"
            />
          </span>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#0A2A4F]">
            Try<span className="text-[#2B5BA8]">Auto</span>Quote
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#0C2340] transition">Home</Link>
          <Link href="/contact" className="hover:text-[#0C2340] transition">Contact</Link>
        </div>

        <button
          onClick={handleQuote}
          className="bg-[#2B5BA8] text-white hover:bg-[#E8732A] transition px-6 py-3 rounded-lg text-sm font-semibold shadow-lg cursor-pointer"
        >
          Get a Quote →
        </button>

      </div>
    </nav>
  );
}