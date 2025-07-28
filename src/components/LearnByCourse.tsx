import React from "react";
import { HiCheck } from "react-icons/hi";
import { Section } from "@/types/product";

const WhatYouWillLearn = ({ sections }: { sections: Section[] }) => {
  if (!sections || !Array.isArray(sections)) return null;
  const pointerSection = sections.find((s) => s.type === "pointers");

  if (!pointerSection || !pointerSection.values) return null;

  return (
    <div id="pointers">
      <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
          <div>
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {pointerSection.name}
            </h2>
            <div className="rounded-md md:border">
              <div className="pt-2 md:p-6">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                  {pointerSection.values.map((item) => (
                    <li key={item.id} className="flex items-start gap-2 mb-2">
                      <HiCheck className="text-[#6294F8] mt-[2px]" size={20} />
                      <div className="flex-1">{item.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
