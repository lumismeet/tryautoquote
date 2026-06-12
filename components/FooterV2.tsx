import Link from "next/link";

export default function FooterV2() {
  return (
    <footer className="bg-[#0A2A4F] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <span className="text-lg font-extrabold tracking-tight">
            Try<span className="text-[#7FA7E0]">Auto</span>Quote
          </span>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="my-8 border-white/10" />

        <p className="text-xs leading-relaxed text-white/50 max-w-5xl">
          TryAutoQuote.com is an independent, advertising-supported comparison
          website. The products and offers that appear on this website are from
          third-party insurance partners and advertisers from which
          TryAutoQuote.com may receive compensation. This compensation may
          influence which products we feature, how they are presented, and
          where they appear on the page. TryAutoQuote.com is not a licensed
          insurance provider or broker. Content on this site is provided for
          informational purposes only and does not constitute insurance advice.
          Available rates and offers vary by location, driving history, and
          other factors and are subject to change without notice. Not all
          products or offers are available in all states.
        </p>

        <p className="mt-6 text-xs text-white/40 text-center">
          © 2026 TryAutoQuote. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}