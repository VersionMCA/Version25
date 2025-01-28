import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "../../app/faq/faqs.js";
import Footer from "@/components/footer/Footer.jsx";

function page() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <div className=" max-w-4xl mx-auto mt-16 p-6">
        <Accordion
          type="single"
          collapsible
          className="w-full border bg-[#030712]/75 rounded-md p-4"
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
      <Footer />
    </div>
  );
}

export default page;
