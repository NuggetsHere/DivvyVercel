'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordionn({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full divide-y divide-neutral-200">
      {faqs.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-4 font-medium text-neutral-900 transition-all hover:underline"
            aria-expanded={openIndex === index}
            aria-controls={`faq-${index}`}
          >
            <span className="text-left">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div
              id={`faq-${index}`}
              className="pb-4 pr-8 text-sm text-neutral-600"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
