"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import {
  ClipboardList,
  Car,
  DollarSign,
  ShieldCheck,
  PhoneOff,
  Zap,
  BadgeCheck,
  Award,
  Clock,
  Layers,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
} from "lucide-react";

import NavbarV2 from "@/components/NavbarV2";
import FAQAccordion from "@/components/FAQAccordion";
import FooterV2 from "@/components/FooterV2";
import { useForm } from "@/context/FormContext";

/* ------------------------------------------------------------------ */
/* Fonts                                                                */
/* ------------------------------------------------------------------ */

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    text: "I'd been on the same plan for 4 years and honestly had no idea I was overpaying. Took me maybe 10 minutes to compare and switch. Saving $58 a month now.",
    name: "Derek Okafor",
    location: "Columbus, OH",
    image: "/person1.png",
  },
  {
    text: "I hate dealing with insurance stuff, so I kept putting it off. This actually made it painless. Got 3 solid quotes, picked one, done. Wish I'd done it sooner.",
    name: "Amanda Reyes",
    location: "Phoenix, AZ",
    image: "/person2.png",
  },
  {
    text: "Was skeptical at first. I figured there'd be a catch or they'd just spam me with calls. Neither happened. Got matched with a provider I actually recognized and the rate was lower than what I had.",
    name: "Tom Vasquez",
    location: "Tampa, FL",
    image: "/person3.png",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "A little Information",
    text: "Provide some basic information about yourself and your vehicle. This allows us to generate customized, personalized results.",
    image: "/ill_comp_blue.svg",
  },
  {
    icon: Car,
    title: "A bit of Magic",
    text: "Our smart matching engine sifts through thousands of possible insurance policies and only presents you with relevant and valid options.",
    image: "/ill_hero_blue.svg",
  },
  {
    icon: DollarSign,
    title: "A Lot of Savings",
    text: "You have the freedom to choose the specific policy you feel suits you the most from a list of matching policies we provide.",
    image: "/ill_mobile_blue.svg",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Free, always",
    text: "The service is free and you are never obligated to buy the presented policy.",
  },
  {
    icon: PhoneOff,
    title: "No spam calls",
    text: "Compare quotes without a flood of follow-up calls. You decide who to talk to.",
  },
  {
    icon: Zap,
    title: "Real-time matching",
    text: "Your details are compared live against a database connected to dozens of top insurance carriers.",
  },
  {
    icon: BadgeCheck,
    title: "Carriers you recognize",
    text: "Get matched with established providers you actually know, willing to insure you.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  const zipRef = useRef<HTMLInputElement>(null);

  const focusZip = () => {
    if (!zipRef.current) return;
    zipRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    // Delay focus so it doesn't cancel smooth scroll
    setTimeout(() => zipRef.current?.focus(), 400);
  };

  return (
    <div
      className={`${display.variable} ${body.variable} [font-family:var(--font-body)] min-h-screen w-full bg-white text-[#0A2A4F]`}
    >
      <NavbarV2 onQuoteClick={focusZip} />

      {/* Shared dark wavy band — Hero + HowItWorks sit on a single flowing background */}
      <div className="relative overflow-hidden bg-[#0A2A4F] text-white">
        {/* Wavy blue blobs flowing through both sections */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 1400"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,260 C220,160 420,380 700,300 C920,240 1100,420 1250,340 L1250,520 C1100,600 900,440 700,520 C420,620 220,400 -50,500 Z"
            fill="#2B5BA8"
            opacity="0.55"
          />
          <path
            d="M-50,720 C260,620 480,840 780,740 C980,680 1140,820 1250,760 L1250,940 C1140,1000 980,860 780,940 C480,1040 260,820 -50,920 Z"
            fill="#2B5BA8"
            opacity="0.4"
          />
          <path
            d="M-50,360 C300,280 500,500 820,420 C1020,360 1180,500 1250,440 L1250,560 C1180,620 1020,480 820,560 C500,660 300,440 -50,540 Z"
            fill="#378ADD"
            opacity="0.18"
          />
        </svg>

        {/* Decorative outlined rings */}
        <div aria-hidden className="absolute top-32 left-8 w-24 h-24 rounded-full border border-white/15 pointer-events-none" />
        <div aria-hidden className="absolute top-96 right-16 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
        <div aria-hidden className="absolute bottom-40 left-1/3 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative">
          <HeroSection zipRef={zipRef} />
          <HowItWorks />
        </div>
      </div>

      <Features />

      {/* Shared dark wavy band — Testimonials + Achievements flow together */}
      <div className="relative overflow-hidden bg-[#0A2A4F] text-white">
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 1600"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,300 C260,200 480,420 760,340 C980,280 1140,440 1250,380 L1250,560 C1140,640 980,480 760,560 C480,660 260,440 -50,540 Z"
            fill="#2B5BA8"
            opacity="0.5"
          />
          <path
            d="M-50,860 C220,760 420,980 720,900 C940,840 1120,1000 1250,940 L1250,1120 C1120,1180 940,1040 720,1120 C420,1220 220,1000 -50,1100 Z"
            fill="#2B5BA8"
            opacity="0.42"
          />
          <path
            d="M-50,420 C320,340 520,560 840,480 C1040,420 1180,560 1250,500 L1250,620 C1180,680 1040,540 840,620 C520,720 320,500 -50,600 Z"
            fill="#378ADD"
            opacity="0.16"
          />
        </svg>

        <div aria-hidden className="absolute top-24 left-10 w-24 h-24 rounded-full border border-white/15 pointer-events-none" />
        <div aria-hidden className="absolute top-1/2 right-12 w-36 h-36 rounded-full border border-white/10 pointer-events-none" />
        <div aria-hidden className="absolute bottom-32 left-1/4 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative">
          <Testimonials />
          <Achievements />
        </div>
      </div>

      <FAQAccordion />
      <Insights />
      <CtaSection />
      <FooterV2 />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable zip form                                                    */
/* ------------------------------------------------------------------ */

function ZipForm({
  zipRef,
  light = false,
}: {
  zipRef?: React.RefObject<HTMLInputElement | null>;
  light?: boolean;
}) {
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");
  const { updateForm } = useForm();
  const router = useRouter();

  const handleSubmit = () => {
    setError("");
    const trimmedZip = zipcode.trim();

    if (!trimmedZip) {
      setError("Please enter a zipcode");
      return;
    }
    if (!/^[0-9]{5}$/.test(trimmedZip)) {
      setError("Invalid zip");
      return;
    }

    updateForm({ zipcode: trimmedZip });
    router.push("/quote/1");
  };

  return (
    <div className="w-full max-w-xl">
      <div
        className={`flex flex-col sm:flex-row rounded-2xl sm:rounded-full p-1.5 gap-1.5 ${
          light
            ? "bg-white shadow-lg shadow-[#2B5BA8]/10 border border-[#0A2A4F]/10"
            : "bg-white"
        }`}
      >
        <input
          type="text"
          inputMode="numeric"
          value={zipcode}
          ref={zipRef}
          onChange={(e) => setZipcode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter zipcode"
          aria-label="Zipcode"
          className="flex-1 px-5 py-3.5 rounded-xl sm:rounded-full text-[#0A2A4F] bg-transparent placeholder:text-[#0A2A4F]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B5BA8]/40"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white font-semibold px-8 py-3.5 rounded-xl sm:rounded-full cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A4F]"
        >
          Get a Quote →
        </button>
      </div>
      <p
        role="status"
        className={`mt-2 min-h-[24px] text-sm ${
          light ? "text-red-600" : "text-red-300"
        }`}
      >
        {error}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function HeroSection({
  zipRef,
}: {
  zipRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="inline-block text-xs font-semibold tracking-widest uppercase text-white bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              Auto insurance, simplified
            </p>

            <h1 className="[font-family:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              Your one-stop shop for{" "}
              <span className="text-[#7FB3EE]">auto-insurance</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/70 max-w-lg mx-auto md:mx-0">
              Answer a few quick questions and we&apos;ll find the best auto
              insurance rates available in your area. No commitment required.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <ZipForm zipRef={zipRef} />
            </div>

            <p className="text-xs text-white/50">
              Free · No obligation · No spam calls
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[230px] sm:w-[340px] md:w-[420px] h-[260px] sm:h-[350px] md:h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/reference/placeholder_v1.png"
                alt="Auto insurance illustration"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works — icon rail panel (template's side-rail section)        */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const StepIcon = step.icon;

  return (
    <section id="how-it-works" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
            How does TryAutoQuote work?
          </h2>
          <p className="mt-4 text-white/65">
            We take the information you provide about yourself and your vehicle
            and compare it in real time to our live database connected to
            dozens of top insurance carriers.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Icon rail */}
            <div
              role="tablist"
              aria-label="How it works steps"
              className="flex md:flex-col items-center justify-center gap-6 md:gap-8 px-6 py-8 md:py-14 md:px-6"
            >
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.title}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={s.title}
                    onClick={() => setActive(i)}
                    className="group relative w-14 h-14 flex items-center justify-center cursor-pointer focus-visible:outline-none"
                  >
                    {/* Concentric ripple rings — appear on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-out"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-700 ease-out"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-1000 ease-out"
                    />

                    {/* Static thin ring offset around the icon */}
                    <span
                      aria-hidden
                      className={`absolute -inset-1.5 rounded-full border transition ${
                        isActive ? "border-[#E8732A]/60" : "border-white/25"
                      }`}
                    />

                    {/* Icon disc */}
                    <span
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition shadow-lg ${
                        isActive
                          ? "bg-[#E8732A] text-white scale-105"
                          : "bg-gradient-to-br from-[#378ADD] to-[#2B5BA8] text-white group-hover:from-[#4FA3E8] group-hover:to-[#378ADD]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step content */}
            <div className="flex-1 grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 text-white">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
                  Step {active + 1} of {steps.length}
                </p>
                <h3 className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <StepIcon className="w-7 h-7 text-[#FFB27D]" />
                  {step.title}
                </h3>
                <p className="text-white/85 leading-relaxed">{step.text}</p>
                <p className="mt-6 text-sm font-semibold text-white">
                  The service is free and you are never obligated to buy the
                  presented policy.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="relative w-[200px] h-[150px] md:w-[260px] md:h-[190px]">
                    <Image
                      key={step.image}
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features — template's "Best Services" 4-card grid                    */
/* ------------------------------------------------------------------ */

function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#EBF2FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-center text-[#0A2A4F] mb-12">
          Why drivers compare with us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-8 text-center shadow-sm border border-[#0A2A4F]/5 hover:shadow-lg hover:-translate-y-1 transition motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#2B5BA8]/10 text-[#2B5BA8] flex items-center justify-center group-hover:bg-[#E8732A] group-hover:text-white transition">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-[#0A2A4F] mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#0A2A4F]/60">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials — template's "Our Awesome Clients" band                 */
/* ------------------------------------------------------------------ */

function TestimonialCard({
  t,
  variant,
}: {
  t: (typeof testimonials)[number];
  variant: "side" | "center";
}) {
  const isCenter = variant === "center";
  return (
    <div
      className={`bg-white rounded-2xl text-[#0A2A4F] text-left transition-all duration-500 ${
        isCenter
          ? "p-7 md:p-9 shadow-2xl shadow-black/30 scale-100 opacity-100"
          : "p-5 md:p-6 shadow-lg shadow-black/20 scale-90 opacity-60 hidden md:block"
      }`}
    >
      <div
        className="flex gap-1 mb-4 justify-center"
        aria-label="5 out of 5 stars"
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={isCenter ? 20 : 16}
            fill="#2B5BA8"
            color="#2B5BA8"
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-3 justify-center">
        <Image
          src={t.image}
          alt={t.name}
          width={48}
          height={48}
          className={`rounded-full object-cover ${
            isCenter ? "w-12 h-12" : "w-9 h-9"
          }`}
        />
        <div>
          <h4
            className={`font-bold ${
              isCenter ? "text-lg" : "text-sm"
            }`}
          >
            {t.name}
          </h4>
          <p className="text-xs text-[#2B5BA8] flex items-center gap-1 font-medium">
            <BadgeCheck className="w-3.5 h-3.5" />
            Verified Buyer
          </p>
        </div>
      </div>

      <p
        className={`leading-relaxed text-center ${
          isCenter ? "text-base md:text-lg" : "text-sm"
        }`}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      <p
        className={`mt-3 text-center text-[#0A2A4F]/50 ${
          isCenter ? "text-sm" : "text-xs"
        }`}
      >
        {t.location}
      </p>
    </div>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const len = testimonials.length;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? len - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === len - 1 ? 0 : prev + 1));

  const prevT = testimonials[(current - 1 + len) % len];
  const centerT = testimonials[current];
  const nextT = testimonials[(current + 1) % len];

  return (
    <section id="reviews" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
          What our customers say…
        </h2>
        <p className="text-white/65 mb-14">
          Thousands of drivers trust TryAutoQuote to find them the best auto
          insurance rates available.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 md:left-4 z-20 bg-white text-[#0A2A4F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#E8732A] hover:text-white transition cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* 3-card peek row */}
          <div className="flex items-center justify-center gap-4 md:gap-6 w-full px-12 md:px-16">
            <div className="flex-1 max-w-xs">
              <TestimonialCard t={prevT} variant="side" />
            </div>
            <div className="flex-1 max-w-md">
              <TestimonialCard key={current} t={centerT} variant="center" />
            </div>
            <div className="flex-1 max-w-xs">
              <TestimonialCard t={nextT} variant="side" />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 md:right-4 z-20 bg-white text-[#0A2A4F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#E8732A] hover:text-white transition cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? "w-8 bg-white" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Achievements — template section, adapted to honest insurance stats   */
/* ------------------------------------------------------------------ */

const achievements = [
  {
    icon: Layers,
    stat: "Dozens",
    label: "of top carriers compared in real time",
  },
  {
    icon: Clock,
    stat: "Minutes",
    label: "to compare and switch, not hours of paperwork",
  },
  {
    icon: ShieldCheck,
    stat: "Free",
    label: "no obligation to buy, ever",
  },
];

function Achievements() {
  const [active, setActive] = useState(0);
  const len = achievements.length;

  // Auto-rotate every 4s
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % len), 4000);
    return () => clearInterval(id);
  }, [len]);

  const prev = () => setActive((p) => (p === 0 ? len - 1 : p - 1));
  const next = () => setActive((p) => (p === len - 1 ? 0 : p + 1));

  const leftIdx = (active - 1 + len) % len;
  const rightIdx = (active + 1) % len;

  const CenterIcon = achievements[active].icon;
  const LeftIcon = achievements[leftIdx].icon;
  const RightIcon = achievements[rightIdx].icon;

  return (
    <section id="achievements" className="relative py-16 md:py-24">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold mb-3 text-white">
          Achievements
        </h2>
        <p className="text-white/65 max-w-xl mx-auto mb-12">
          Built to earn drivers&apos; trust. Here&apos;s what comparing with
          TryAutoQuote gets you.
        </p>

        {/* Arc stage */}
        <div className="relative h-64 md:h-72 mx-auto max-w-3xl">
          {/* Dashed arc behind the circles */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 240"
            preserveAspectRatio="none"
          >
            <path
              d="M30,200 Q300,-40 570,200"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Left dim circle */}
          <button
            onClick={prev}
            aria-label={`Previous: ${achievements[leftIdx].stat}`}
            className="absolute left-0 md:left-8 top-[78%] -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#2B5BA8]/40 border border-white/15 flex items-center justify-center opacity-50 hover:opacity-80 transition cursor-pointer backdrop-blur-sm"
          >
            <LeftIcon className="w-7 h-7 md:w-8 md:h-8 text-white/70" />
          </button>

          {/* Right dim circle */}
          <button
            onClick={next}
            aria-label={`Next: ${achievements[rightIdx].stat}`}
            className="absolute right-0 md:right-8 top-[78%] -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#2B5BA8]/40 border border-white/15 flex items-center justify-center opacity-50 hover:opacity-80 transition cursor-pointer backdrop-blur-sm"
          >
            <RightIcon className="w-7 h-7 md:w-8 md:h-8 text-white/70" />
          </button>

          {/* Center focal circle */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
            <div
              key={active}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#378ADD] to-[#2B5BA8] border-4 border-[#E8732A] flex items-center justify-center shadow-2xl shadow-black/40 transition-all duration-500"
            >
              <span aria-hidden className="absolute -inset-3 rounded-full border border-white/15" />
              <CenterIcon className="w-14 h-14 md:w-16 md:h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Stat + label of active */}
        <div key={`label-${active}`} className="mt-4">
          <p className="[font-family:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
            {achievements[active].stat}
          </p>
          <p className="mt-2 text-sm text-white/65 max-w-md mx-auto">
            {achievements[active].label}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {achievements.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to achievement ${i + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === active ? "w-8 bg-white" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Insights — image grid with zoom-on-hover                             */
/* ------------------------------------------------------------------ */

const insights = [
  {
    title: "Why You Might Be Overpaying for Auto Insurance",
    desc: "Most drivers stick with the same policy for years without realizing rates have shifted around them.",
    img: "/auto_pics/WhatsApp Image 2026-03-05 at 15.34.51 (1).jpeg",
  },
  {
    title: "How Your Credit Score Affects Auto Rates",
    desc: "In most states, insurers use credit-based scoring as part of the premium calculation.",
    img: "/auto_pics/cartooncar.jpeg",
  },
  {
    title: "Bundling Home and Auto: Is It Worth It?",
    desc: "Multi-policy discounts can be significant, here's when bundling actually saves money.",
    img: "/auto_pics/discussingpolicies.jpeg",
  },
  {
    title: "What Happens After an Accident?",
    desc: "A step-by-step guide to filing a claim and what to expect from your carrier.",
    img: "/auto_pics/girlhandouttawindow.jpg",
  },
  {
    title: "5 Things That Quietly Drive Up Your Premium",
    desc: "Common factors that raise rates without most drivers noticing.",
    img: "/auto_pics/happyfamilyouttawindow.png",
  },
];

function InsightCard({
  item,
  className = "",
}: {
  item: (typeof insights)[number];
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {/* Image — zooms in on hover; container stays fixed via overflow-hidden */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"
      />

      {/* Text content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="[font-family:var(--font-display)] text-base md:text-lg font-bold leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm text-white/75 line-clamp-2">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function Insights() {
  return (
    <section id="insights" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F]">
            Insights for smarter drivers
          </h2>
          <p className="mt-4 text-[#0A2A4F]/60">
            Quick reads on saving money, choosing coverage, and getting the most
            out of your auto policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 md:gap-6 auto-rows-[460px] md:auto-rows-[520px]">
          {/* Featured tall card */}
          <InsightCard item={insights[0]} className="lg:row-span-2 lg:h-auto h-[940px] md:h-[1060px]" />
          <InsightCard item={insights[1]} />
          <InsightCard item={insights[2]} />
          <InsightCard item={insights[3]} />
          <InsightCard item={insights[4]} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA — quote + agent contact (template's Contact band)          */
/* ------------------------------------------------------------------ */

function CtaSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Quote side */}
          <div className="text-center md:text-left">
            <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F] leading-snug mb-4">
              Learn how you can get the best deals and start saving
            </h2>
            <p className="text-[#0A2A4F]/60 max-w-md mx-auto md:mx-0 mb-8">
              Answer a few quick questions and we&apos;ll find the best auto
              insurance rates available in your area. No commitment required.
            </p>
            <div className="flex justify-center md:justify-start">
              <ZipForm light />
            </div>
          </div>

          {/* Agent side */}
          <div className="bg-[#EBF2FB] rounded-3xl p-8 md:p-10 text-center">
            <div className="relative w-[220px] h-[150px] md:w-[280px] md:h-[190px] mx-auto mb-6">
              <Image
                src="/ill_mobile_blue.svg"
                alt="Talk to an insurance specialist"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="[font-family:var(--font-display)] text-2xl font-bold text-[#0A2A4F] mb-3">
              Know your options? Call an Agent
            </h3>
            <p className="text-[#0A2A4F]/60 max-w-md mx-auto mb-6">
              Have questions or want personalized guidance? Our licensed
              insurance specialists are here to walk you through your options.
              Please feel free to email us.
            </p>
            <a
              href="mailto:support@tryautoquote.com"
              className="inline-flex items-center gap-2 bg-[#0A2A4F] hover:bg-[#E8732A] transition text-white font-semibold px-8 py-3.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B5BA8]"
            >
              <Mail className="w-4 h-4" />
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}