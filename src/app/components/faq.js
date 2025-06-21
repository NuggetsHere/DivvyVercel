import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What types of laptops do you repair?</AccordionTrigger>
          <AccordionContent>
          We repair all major brands including Apple, Dell, HP, Lenovo, Asus, Acer, and more. Whether it’s a MacBook, gaming laptop, or an ultrabook, we’ve got you covered.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does a typical laptop repair take?</AccordionTrigger>
          <AccordionContent>
          Most minor repairs are done within a few hours. For more complex issues, it may take 2–4 working days. We’ll always keep you informed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a warranty on repairs?</AccordionTrigger>
          <AccordionContent>
            Absolutely! Our repairs come with a warranty - typically upto ONE YEAR depending on the service and parts used.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Where exactly are you located in Nehru Place?</AccordionTrigger>
          <AccordionContent>
          We’re located at 102B Dohil Chambers—right in the heart of Nehru Place market. You can also find us on Google Maps.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  