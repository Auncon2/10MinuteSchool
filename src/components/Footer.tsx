import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex  justify-center ">
      <div className="container mb-24 md:mb-0 max-w-[1120px]">
        <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
          {/* Logo & App Download */}
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <Link href="/" className="mb-4">
              <Image
                src="https://10minuteschool.com/images/logo.svg"
                alt="Instructor"
                width={116}
                height={32}
                className="rounded-md opacity-100"
              />
            </Link>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              Download Our Mobile App
            </h3>
            <div className="flex">
              <div className="mr-4">
                <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <Image
                    src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                    alt="google play"
                    width={156}
                    height={49}
                    className="rounded-md opacity-100"
                  />
                </Link>
              </div>
              <div>
                <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <Image
                    src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                    alt="ios download"
                    width={156}
                    height={49}
                    className="rounded-md opacity-100"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Company & Others Links */}
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Company
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <Link
                      href="https://app.10minuteschool.com/careers"
                      className="hover:text-green"
                    >
                      Career / Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                      className="hover:text-green"
                    >
                      Join as a Teacher
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://affiliation.10minuteschool.com/"
                      className="hover:text-green"
                    >
                      Join as an Affiliate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.10minuteschool.com/privacy-policy"
                      className="hover:text-green"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.10minuteschool.com/refund-policy"
                      className="hover:text-green"
                    >
                      Refund policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.10minuteschool.com/terms-and-conditions"
                      className="hover:text-green"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Others
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <Link
                      href="https://blog.10minuteschool.com/"
                      className="hover:text-green"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/store/all" className="hover:text-green">
                      Book Store
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://10minuteschool.com/content"
                      className="hover:text-green"
                    >
                      Free Notes &amp; Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-prep" className="hover:text-green">
                      Job Preparation Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/certificate" className="hover:text-green">
                      Verify Certificate
                    </Link>
                  </li>
                  <li>
                    <Link href="/resource" className="hover:text-green">
                      Free Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Keep up with us at
              </h3>
              <p className="mb-4 text-base font-normal">
                Call Us:{" "}
                <Link href="tel:16910" className="text-green">
                  16910
                </Link>{" "}
                (24x7)
              </p>
              <p className="mb-4 text-base font-normal">
                WhatsApp:{" "}
                <Link
                  href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance"
                  className="text-green"
                >
                  +8801896016252
                </Link>{" "}
                (24x7)
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh:{" "}
                <Link href="tel:+8809610916910" className="text-green">
                  +8809610916910
                </Link>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us:{" "}
                <span className="text-green">support@10minuteschool.com</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              {[
                {
                  href: "https://www.facebook.com/10minuteschool/",
                  src: "https://cdn.10minuteschool.com/images/facebook_1695730910971.png",
                  alt: "facebook",
                },
                {
                  href: "https://www.instagram.com/10ms_insta/",
                  src: "https://cdn.10minuteschool.com/images/instagram_1695731442397.png",
                  alt: "instagram",
                },
                {
                  href: "https://www.linkedin.com/company/10ms/",
                  src: "https://cdn.10minuteschool.com/images/linkedin_1695731507042.png",
                  alt: "linkedin",
                },
                {
                  href: "https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw",
                  src: "https://cdn.10minuteschool.com/images/youtube_1695731538726.png",
                  alt: "youtube",
                },
                {
                  href: "https://www.tiktok.com/@10minuteschool?lang=en",
                  src: "https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png",
                  alt: "Tiktok",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={32}
                    height={32}
                    className="opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
