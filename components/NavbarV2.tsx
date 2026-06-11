"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarV2Props = {
  onQuoteClick: () => void;
};

const links = [
  { label: "Home", href: "#" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarV2({ onQuoteClick }: NavbarV2Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#0A2A4F]/10">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#0A2A4F]/70 hover:text-[#2B5BA8] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B5BA8] rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={onQuoteClick}
          className="hidden md:inline-flex bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A4F]"
        >
          Get a Quote →
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 text-[#0A2A4F] rounded focus-visible:outline-2 focus-visible:outline-[#2B5BA8]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#0A2A4F]/10 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#0A2A4F]/80 hover:text-[#2B5BA8] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  onQuoteClick();
                }}
                className="w-full bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white font-semibold px-6 py-3 rounded-full cursor-pointer"
              >
                Get a Quote →
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}