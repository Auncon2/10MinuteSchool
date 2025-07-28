"use client";

import { Media } from "@/types/product";
import Image from "next/image";
import React, { useState } from "react";

interface MediaCarouselProps {
  media: Media[];
}

const MediaPlayer: React.FC<MediaCarouselProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  if (!media || media.length === 0) {
    return <div>No media available</div>;
  }
  console.log("media", media);
  const currentMedia = media[currentIndex];

  const handlePrev = () => {
    setShowVideo(false);
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setShowVideo(false);
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setShowVideo(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Media Display */}
      <div className="relative aspect-video w-full max-w-4xl mx-auto bg-black rounded overflow-hidden">
        {currentMedia.resource_type === "video" && showVideo ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentMedia.resource_value}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={
                currentMedia.resource_type === "image"
                  ? currentMedia.resource_value
                  : currentMedia.thumbnail_url || "/fallback.jpg"
              }
              alt={currentMedia.name}
              fill
              className="object-cover"
              loading="lazy"
            />
            {currentMedia.resource_type === "video" && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    fill="#fff"
                    fillOpacity="0.5"
                  />
                  <circle cx="28" cy="28" r="25.415" fill="#fff" />
                  <path
                    fill="#1CAB55"
                    d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Left Arrow */}
      <div
        onClick={handlePrev}
        className="absolute left-[10px] top-[40%] -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer text-white"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
        </svg>
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleNext}
        className="absolute right-[10px] top-[40%] z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer text-white"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
        </svg>
      </div>

      {/* Thumbnails */}

      {/* Thumbnails */}

      <div className="w-full  flex flex-nowrap gap-3 p-4 overflow-x-auto hideScrollbar">
        {media.map((src, index) => (
          <div
            key={index}
            className={`relative w-[55px] h-[30px] shrink-0 rounded overflow-hidden cursor-pointer border-2 ${
              index === currentIndex ? "border-[#1CAB55]" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={
                src.resource_type === "image"
                  ? src.resource_value
                  : src.thumbnail_url || "/fallback.jpg"
              }
              alt={src.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPlayer;
