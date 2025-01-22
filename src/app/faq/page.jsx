import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "../../app/faq/faqs.js";

function page() {
  return (
    <>
      <div className=" max-w-2xl mx-auto mt-24 p-6">
        <Accordion
          type="single"
          collapsible
          className="w-full border bg-black/90 rounded-md p-4"
        >
          {faqItems.map((item, index) => {
            return (
              <AccordionItem
                className=""
                value={`item-${index + 1}`}
                key={index}
              >
                <AccordionTrigger className="font-aldrich">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-aldrich">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}

export default page;
