import { Section } from "@/types/product";
import Image from "next/image";
import React from "react";

const CourseExclusiveFeature = ({ sections }: { sections: Section[] }) => {
  const instructors = sections?.find((s) => s.type === "instructors");
  if (!instructors || !instructors.values) return null;
  console.log("instructorsssffs", instructors);
  return (
    <div id="feature_explanations" className="px-5">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          Course Exclusive Feature
        </h2>

        <div className="grid grid-cols-1 border divide-y rounded-md">
          {/* Feature Item 1 */}
          <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px] font-[500] leading-[30px] text-[#111827]">
                ভিডিও লেকচার
              </h2>

              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>IELTS Academic ও General Training নিয়ে আলোচনা</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>
                  Reading, Writing, Listening ও Speaking এর Overview &amp;
                  Format
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>ভিডিওর সাথে প্র্যাকটিসের সুযোগ</p>
              </div>
            </div>

            <div>
              <div
                className="mb-4 mx-auto max-w-[350px] opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: 0 }}
              >
                <Image
                  src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
                  alt="ভিডিও লেকচার"
                  width={250}
                  height={200}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-[16px] font-[500] leading-[30px] text-[#111827]">
                Reading ও Listening Mock Tests
              </h2>

              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>10 Reading &amp; 10 Listening Mock Tests</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</p>
              </div>
              <div className="flex flex-row items-center gap-5 text-[#4B5563] text-[16px] font-[400] leading-[24px]">
                <PlayIcon />
                <p>যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</p>
              </div>
            </div>

            <div>
              <div
                className="mb-4 mx-auto max-w-[350px] opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: 0 }}
              >
                <Image
                  src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png"
                  alt="Reading ও Listening Mock Tests"
                  width={250}
                  height={200}
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="15"
    fill="none"
    viewBox="0 0 19 15"
  >
    <path
      fill="#6294F8"
      stroke="#6294F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.893"
      d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
    ></path>
  </svg>
);

export default CourseExclusiveFeature;
