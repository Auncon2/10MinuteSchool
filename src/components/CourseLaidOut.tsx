import { Section } from "@/types/product";
import Image from "next/image";
import React from "react";

const CourseLaidOut = ({ sections }: { sections: Section[] }) => {
  const features = sections?.find((s) => s.type === "features");
  if (!features || !features.values) return null;

  return (
    <div id="features">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          {features.name || "How the course is laid out"}
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {features.values.map((item) => (
            <div key={item.id} className="flex flex-row items-start gap-3 m-1">
              <div>
                <div
                  className="mb-4 mx-auto transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    alt={item.title}
                    src={item.icon}
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500] leading-[26px] text-white">
                  {item.title}
                </h2>
                <h2 className="text-[14px] font-[400] leading-[22px] text-[#9CA3AF]">
                  {item.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLaidOut;
