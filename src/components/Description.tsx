"use client";
import React from "react";

export interface DescriptionProps {
  data: {
    description: string;
  };
}

const Description = ({ data }: { data: DescriptionProps }) => {
  return (
    <>
      {data?.data?.description ? (
        <div
          className="prose prose-invert max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: data.data.description }}
        />
      ) : (
        <p className="text-gray-400 italic">No description available.</p>
      )}
    </>
  );
};

export default Description;
