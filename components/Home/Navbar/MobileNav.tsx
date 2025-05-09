"use client";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiBars3BottomRight } from "react-icons/hi2";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <section className="lg:hidden">
      <div className="   z-[1000] w-full fixed h-[74px] bg-[#141414] ">
        <div className="flex items-center justify-center mx-auto h-full w-[95%] pt-[40px] pb-[14px] ">
          <div className="flex items-center justify-center gap-2 ">
            <h1 className="text-[#98989A] font-normal text-[12px]">
              Subscribe to our Newsletter for Blogs and Resources
            </h1>
            <ArrowUpRightIcon className="text-[#FFD11A] size-5" />
          </div>
        </div>
        <div className="bg-[#1A1A1A] h-[75px] w-full">
          <div className="flex items-center justify-between mx-auto h-full w-[90%]">
            <div className="flex items-center justify-center space-x-[9px]">
              <Image
                src="/images/blogicon.png"
                alt="icon"
                width={35}
                height={35}
              />
              <h1 className="text-[#FFFFFF] font-bold text-[20px]   ">
                FutureTech
              </h1>
            </div>
            <div>
              <HiBars3BottomRight
                onClick={handShowNav}
                className="w-[34px] h-[34px] text-[#FFFFFF]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed ${navOpen}  inset-0 transform transition-all duration-500 z-[1006] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#FFD11A] space-y-6 z-[1050]`}
      >
        <Link
          href="/"
          onClick={handleCloseNav}
          className="ml-12 border-b-2 pb-2 font-normal text-[18px] text-[#FFFFFF] w-fit "
        >
          Home
        </Link>
        <Link
          href="/News"
          onClick={handleCloseNav}
          className="ml-12 border-b-2 pb-2 font-normal text-[18px] text-[#FFFFFF] w-fit "
        >
          News
        </Link>
        <Link
          href="/Podcast"
          onClick={handleCloseNav}
          className="ml-12 border-b-2 pb-2 font-normal text-[18px] text-[#FFFFFF] w-fit  "
        >
          Podcasts
        </Link>
        <Link
          href="/Resource"
          onClick={handleCloseNav}
          className="ml-12 border-b-2 pb-2 font-normal text-[18px] text-[#FFFFFF] w-fit "
        >
          Resources
        </Link>
        <Link
          href="/Contact"
          onClick={handleCloseNav}
          className="ml-12 border-b-2 pb-2 font-normal text-[18px] text-[#FFFFFF] w-fit "
        >
          Contact Us
        </Link>

        <CgClose
          onClick={handleCloseNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </section>
  );
};

export default MobileNav;
