import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="  z-[1000] w-full fixed h-[67px] bg-[#141414] ">
      <div className="flex items-center justify-center mx-auto h-full w-[90%] ">
        <div className="flex items-center justify-center gap-4 ">
          <h1 className="text-[#98989A] font-normal text-[18px]">
            Subscribe to our Newsletter for News & latest Blogs and Resources
          </h1>
          <ArrowUpRightIcon className="text-[#FFD11A] size-5" />
        </div>
      </div>
      <div className="bg-[#1A1A1A] h-[103px] w-full">
        <div className=" hidden lg:flex items-center justify-between mx-auto h-full w-[90%] xl:w-[90%]">
          <div className="flex items-center justify-center space-x-3">
            <Image
              src="/images/blogicon.png"
              alt="icon"
              width={50}
              height={50}
            />
            <h1 className="text-[#FFFFFF] font-bold text-[24px]   ">
              FutureTech
            </h1>
          </div>
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="relative font-normal text-[18px] text-[#98989A] after:content-[''] after:absolute after:block after:bg-[#FFFF00]
            after:h-[3px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300  "
            >
              Home
            </Link>
            <Link
              href="/News"
              className="relative font-normal text-[18px] text-[#98989A] after:content-[''] after:absolute after:block after:bg-[#FFFF00]
            after:h-[3px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300"
            >
              News
            </Link>
            <Link
              href="/Podcast"
              className="relative font-normal text-[18px] text-[#98989A] after:content-[''] after:absolute after:block after:bg-[#FFFF00]
            after:h-[3px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 "
            >
              Podcasts
            </Link>
            <Link
              href="/Resource"
              className="relative font-normal text-[18px] text-[#98989A] after:content-[''] after:absolute after:block after:bg-[#FFFF00]
            after:h-[3px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:duration-300 "
            >
              Resources
            </Link>
          </div>
          <Link href="/Contact">
            <button className="px-[14px] py-[20px] bg-[#FFD11A] text-black rounded-[10px] font-medium text-[18px]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
