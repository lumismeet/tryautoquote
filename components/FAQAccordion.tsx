"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What factors affect my car insurance premium?",
    answer:
      "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
  },
  {
    question: "How quickly can I get matched with providers?",
    answer:
      "Almost instantly. Once you share a few details about yourself and your vehicle, our matching engine compares them in real time against a live database connected to dozens of top insurance carriers — so you see relevant, valid options in minutes, not days.",
  },
  {
    question: "Is the service really free?",
    answer:
      "Yes. The service is free and you are never obligated to buy any policy we present. TryAutoQuote may receive compensation from partner carriers when you choose a policy, which is how we keep the service free for drivers.",
  },
  {
    question: "Will checking quotes affect my credit score?",
    answer:
      "No. Comparing quotes through TryAutoQuote does not involve a hard credit inquiry. Some insurers may use a soft pull to estimate your rate, and soft inquiries have no impact on your credit score.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#EBF2FB] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 className="[font-family:var(--font-display)] text-3xl md:text-4xl font-bold text-[#0A2A4F] mb-3">
          Frequently asked questions
        </h2>
        <p className="text-[#0A2A4F]/60 mb-10">
          Quick answers before you compare.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#0A2A4F]/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2B5BA8]"
                >
                  <span className="font-semibold text-[#0A2A4F]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#2B5BA8] transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base leading-relaxed text-[#0A2A4F]/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}