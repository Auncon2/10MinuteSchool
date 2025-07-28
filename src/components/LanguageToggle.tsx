"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LanguageToggle = ({ currentLang }: { currentLang: "en" | "bn" }) => {
  const router = useRouter();
  const pathname = usePathname(); // e.g., /en/product/ielts-course

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "bn" : "en";
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="hidden md:flex items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 cursor-pointer"
    >
      <span>{currentLang === "bn" ? "বাং" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;
