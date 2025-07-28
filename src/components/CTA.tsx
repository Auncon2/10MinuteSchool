import { CtaText } from "@/types/product";
import React from "react";

const CTA = ({ cta }: { cta: CtaText }) => {
  return (
    <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md md:w-full whitespace-nowrap text-center">
      {cta?.name}
    </button>
  );
};

export default CTA;
