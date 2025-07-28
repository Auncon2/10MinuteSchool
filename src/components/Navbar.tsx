import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageToggle from "./LanguageToggle";

const Navbar = ({ lang }: { lang: "en" | "bn" }) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        {/* Mobile menu and logo */}
        <div className="flex gap-2">
          <button type="button" name="menu-toggle" className="xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z" />
            </svg>
            <span className="sr-only">menu</span>
          </button>
          <div className="md:hidden">
            <Link href={`/${lang}`}>
              <Image
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                alt="10ms"
                width={100}
                height={27}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Desktop logo */}
        <div className="items-center hidden gap-9 md:flex">
          <Link href={`/${lang}`}>
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10ms"
              width={100}
              height={27}
              priority
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 hidden w-full pr-4 md:block">
          <div className="relative flex w-full items-center gap-2 rounded-t-[23px] rounded-b-[23px] border px-[12px] py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="24"
              fill="none"
              viewBox="0 0 27 24"
            >
              <path
                fill="#111827"
                d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full flex-1 placeholder:text-sm placeholder:text-[#7C818A] focus:outline-none"
            />
          </div>
        </div>

        {/* Main Nav */}
        <nav className="hidden mr-4 xl:block">
          <ul className="flex items-center gap-2 lg:gap-4">
            {[
              { name: "Class 6-12", href: "/academic/" },
              { name: "Skills", href: "/skills/" },
              { name: "Admission", href: "/admission/" },
              { name: "Online Batch", href: "/online-batch/" },
              { name: "English Centre", href: "/english-centre/" },
              { name: "More", href: "#" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${lang}${item.href}`}
                  className="flex items-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login and Language Toggle */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <LanguageToggle currentLang={lang} />
          <Link
            className="flex items-center px-3 py-1 text-white rounded-md bg-green md:px-6"
            href={`/${lang}/auth/login`}
          >
            <span className="whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium">
              লগ-ইন
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
