import { Section } from "@/types/product";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import parse from "html-react-parser";
const CourseDetails = ({ sections }: { sections: Section[] }) => {
  if (!sections || !Array.isArray(sections)) return null;
  const aboutSection = sections.find((s) => s.type === "about");

  if (!aboutSection || !aboutSection.values) return null;
  console.log("aboutSection", aboutSection);
  return (
    <div id="about" className="mt-10 max-w-[900px]">
      <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
        {aboutSection.name}
      </h2>

      <Accordion type="multiple" className="rounded-lg border px-3 md:px-5">
        {aboutSection.values.map((item, index) => (
          <AccordionItem key={item.id} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {parse(item.title)}
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-gray-600 prose max-w-none">
                {parse(item.description)}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseDetails;
