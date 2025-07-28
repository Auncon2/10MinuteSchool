"use client";

import Image from "next/image";

import CTA from "./CTA";
import Checklist from "./Checklist";
import MediaPlayer from "./MediaPlayer";
import Description from "./Description";
import { Section } from "@/types/product";

interface MediaItem {
  name: string;
  resource_type: "video" | "image"; // ensure this is strict
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface DescriptionProps {
  data: {
    title: string;
    cta_text: {
      name: string;
      value: string;
    };
    description: string;
    html?: string;
    media: MediaItem[];
    checklist: ChecklistItem[];
    sections: Section[];
  };
}

const HeroSection = ({
  data,
  isFixed,
}: {
  data: DescriptionProps;
  isFixed: boolean;
}) => {
  return (
    <div
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
      }}
    >
      <div className="container relative flex flex-col gap-3 md:flex-row md:gap-14 md:py-10 min-h-[300px] justify-center items-center">
        {/* Left section */}
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1 max-w-[720px]">
          <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
            IELTS Course by Munzereen Shahid
          </h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <Image
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Course Rating"
                  width={130}
                  height={40}
                  className="md:w-[130px] w-[100px]"
                  unoptimized
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (৮২.৬% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
          </div>
          <Description data={data} />
        </div>

        {/* Right section */}
        <section
          className={`w-full md:w-[330px] lg:w-[400px] order-2 bg-white ${
            isFixed
              ? "fixed top-[80px] right-[320px] z-40 "
              : "md:absolute -right-10 md:top-[50px]"
          } `}
        >
          <div className="md:sticky md:top-[112px]">
            <div className="md:border  overflow-hidden">
              <div className="hidden p-1 md:block">
                {/* Carousel (hide when fixed) */}
                {/* <div ref={mediaRef} className="h-1" /> */}

                {!isFixed && <MediaPlayer media={data.data.media} />}

                {/* Mobile heading */}
                <div className="block md:hidden">
                  <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                    {data?.data?.title}
                  </h1>
                </div>
              </div>

              {/* Pricing and Enroll Button */}
              <div className="w-full p-4 md:h-auto" id="variant">
                <div className="relative md:static">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between md:flex-col md:items-start">
                      <div className="md:mb-3">
                        <div className="inline-block text-2xl font-semibold">
                          ৳3850
                        </div>
                        <span className="inline-flex items-center ml-2">
                          <del className="text-base font-normal md:text-xl">
                            ৳5000
                          </del>
                          <div className=" ml-2 hidden">
                            <p className="text-sm font-medium text-green-600">
                              1150 ৳ ছাড়
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <CTA cta={data?.data?.cta_text} />
                  </div>
                </div>
              </div>

              {/* Course facts */}
              <div className="hidden md:block">
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold">
                    এই কোর্সে যা থাকছে
                  </p>
                  <Checklist items={data?.data.checklist} />
                </div>
              </div>
            </div>

            {/* Call to action text */}
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-[#1cab55]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span className="ml-1 text-[#1cab55]">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
