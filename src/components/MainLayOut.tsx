"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroSection, { DescriptionProps } from "./HeroSection";
import Instructors from "./Instructors";
import CourseLaidOut from "./CourseLaidOut";
import CourseDetails from "./CourseDetails";
import CourseExclusiveFeature from "./CourseExclusiveFeature";
import LearnByCourse from "./LearnByCourse";

const MainLayOut = ({ data }: { data: DescriptionProps }) => {
  const [isFixed, setIsFixed] = useState(false);

  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        animationFrameId = requestAnimationFrame(() => {
          setIsFixed((prev) => {
            const shouldFix = !entry.isIntersecting;
            if (prev !== shouldFix) {
              return shouldFix;
            }
            return prev;
          });
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    const node = mediaRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <HeroSection data={data} isFixed={isFixed} />
      <div ref={mediaRef} className="h-1" />
      <div className="flex justify-center items-center">
        <div className="max-w-[720px] ">
          <Instructors sections={data.data.sections} />
          <CourseLaidOut sections={data.data.sections} />
          <LearnByCourse sections={data.data.sections} />
          <CourseDetails sections={data.data.sections} />
          <CourseExclusiveFeature sections={data.data.sections} />
        </div>
        <div className="w-full md:max-w-[330px] lg:max-w-[400px]"></div>
      </div>
    </>
  );
};

export default MainLayOut;
