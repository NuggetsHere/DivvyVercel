// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
  // } from "@/components/ui/accordion"
  
//   export function AccordionDemo() {
//     return (
//       <Accordion type="single" collapsible className="w-full">
//         <AccordionItem value="item-1">
//           <AccordionTrigger>What types of laptops do you repair?</AccordionTrigger>
//           <AccordionContent>
//           We repair all major brands including Apple, Dell, HP, Lenovo, Asus, Acer, and more. Whether it’s a MacBook, gaming laptop, or an ultrabook, we’ve got you covered.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger>How long does a typical laptop repair take?</AccordionTrigger>
//           <AccordionContent>
//           Most minor repairs are done within a few hours. For more complex issues, it may take 2–4 working days. We’ll always keep you informed.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger>Is there a warranty on repairs?</AccordionTrigger>
//           <AccordionContent>
//             Absolutely! Our repairs come with a warranty - typically upto ONE YEAR depending on the service and parts used.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-4">
//           <AccordionTrigger>Where exactly are you located in Nehru Place?</AccordionTrigger>
//           <AccordionContent>
//           We’re located at 102B Dohil Chambers—right in the heart of Nehru Place market. You can also find us on Google Maps.
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     )
//   }
  

'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function AccordionDemo() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What types of laptops do you repair?",
      answer:
        "We repair all major brands including Apple, Dell, HP, Lenovo, Asus, Acer, and more. Whether it’s a MacBook, gaming laptop, or an ultrabook, we’ve got you covered.",
    },
    {
      question: "How long does a typical laptop repair take?",
      answer:
        "Most minor repairs are done within a few hours. For more complex issues, it may take 2–4 working days. We’ll always keep you informed.",
    },
    {
      question: "Is there a warranty on repairs?",
      answer:
        "Absolutely! Our repairs come with a warranty – typically up to ONE YEAR depending on the service and parts used.",
    },
    {
      question: "Where exactly are you located in Nehru Place?",
      answer:
        "We’re located at 102B Dohil Chambers—right in the heart of Nehru Place market. You can also find us on Google Maps.",
    },
  ]

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
  )
}


export default AccordionDemo;