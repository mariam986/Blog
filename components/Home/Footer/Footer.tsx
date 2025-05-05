import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#1A1A1A] ">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col space-y-20 py-[60px]">
            <div className="flex flex-col lg:flex-row space-x-10 space-y-3">
              <div className="flex space-x-2 lg:hidden">
                <Image
                  src="/images/blogicon.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className="w-[60px] h-[60px] object-cover"
                />
                <div className="px-[8px] pt-[4px] pb-[4px] text-[#FFFFFF] rounded-[4px] border-2 bg-[#333333] border-[#262626] items-center flex">
                  <p>Learn, Connect and Innovate</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/images/blogicon.png"
                  alt="icon"
                  width={200}
                  height={200}
                  className="w-[150px] h-[150px] object-contain"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="px-[8px] pt-[4px] pb-[4px] text-[#FFFFFF]  lg:w-[35%]  xl:w-[20%]  rounded-[4px] border-2 bg-[#333333] border-[#262626] items-center  hidden lg:flex ">
                  <p>Learn, Connect and Innovate</p>
                </div>
                <h1 className="text-[28px] md:text-[38px] lg:text-[44px] xl:text-[58px] font-medium text-[#FFFFFF]">
                  Be Part of the Future Tech Revolution
                </h1>
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                  Immerse yourself in the world of future technology. Explore
                  our comprehensive resources, connect with fellow tech
                  enthusiasts, and drive innovation in the industry. Join a
                  dynamic community of forward-thinkers.
                </p>
              </div>
            </div>
            <div className="border bg-[#141414] border-[#141414] flex flex-col lg:flex-row  px-[20px] py-[20px] rounded-[12px] space-x-3 space-y-3 ">
              <div className="border-2 bg-[#1A1A1A] border-[#262626] px-[40px] py-[40px] rounded-[12px] flex flex-col space-y-6  ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px]  text-[#FFFFFF]">
                    Resource Access
                  </h2>
                  <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                    <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                  </div>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
              <div className="border-2 bg-[#1A1A1A] border-[#262626] px-[40px] py-[40px] rounded-[12px] flex flex-col space-y-6  ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px]  text-[#FFFFFF]">
                    Resource Access
                  </h2>
                  <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                    <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                  </div>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
              <div className="border-2 bg-[#1A1A1A] border-[#262626] px-[40px] py-[40px] rounded-[12px] flex flex-col space-y-6  ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px]  text-[#FFFFFF]">
                    Resource Access
                  </h2>
                  <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                    <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                  </div>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
              <div className="border-2 bg-[#1A1A1A] border-[#262626] px-[40px] py-[40px] rounded-[12px]  flex-col space-y-6 hidden  ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px]  text-white">
                    Resource Access
                  </h2>
                  <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                    <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                  </div>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto py-[60px]">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                Home
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5">
                Features
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Blogs
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Resources
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Testimonials
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Contact Us
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Newsletter
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                News
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5">
                Trending Stories
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Featured Videos
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Technology
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Health
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Politics
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Environment
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                Blogs
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5">
                Quantum Computing
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                AI Ethics
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Space Exploration
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Biotechnology
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Renewable Energy
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Biohacking
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                Podcasts
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5">
                AI Revolution
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                AI Revolution
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                TechTalk AL
              </p>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                AI Conversations
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                Resources
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-1  space-y-3 ">
                <div className="border-2 pl-[16px] pr-[28px] py-[10px] border-[#262626] bg-[#141414] relative rounded-[8px] w-fit ">
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Whitepapers
                  </p>
                  <ArrowUpRightIcon className="size-5 text-[#FFD11A]  absolute top-3  lg:top-4 left-28 lg:left-34 " />
                </div>
                <div className="border-2 pl-[16px] pr-[28px] py-[10px] border-[#262626] bg-[#141414] relative rounded-[8px] w-fit ">
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Ebooks
                  </p>
                  <ArrowUpRightIcon className="size-5 text-[#FFD11A]  absolute  top-3  lg:top-4 left-18 lg:left-20" />
                </div>
                <div className="border-2 pl-[16px] pr-[28px]  py-[10px] border-[#262626] bg-[#141414] relative rounded-[8px] w-fit ">
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Reports
                  </p>
                  <ArrowUpRightIcon className="size-5 text-[#FFD11A]  absolute top-3  lg:top-4 left-18 lg:left-22 " />
                </div>
                <div className="border-2 pl-[16px] pr-[28px]  py-[10px] border-[#262626] bg-[#141414] relative rounded-[8px] w-fit ">
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Research Papers
                  </p>
                  <ArrowUpRightIcon className="size-5 text-[#FFD11A]  absolute top-3  lg:top-4 left-34 md:left-36 lg:left-42 " />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-[#262626] mt-20 "></div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 mt-10 ">
            <div className="flex space-x-2 lg:hidden">
              <FaTwitter className="text-[#FFFFFF]" />
              <FaDiscord className="text-[#FFFFFF]" />
              <FaLinkedin className="text-[#FFFFFF]" />
            </div>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              Terms & Conditions | Privacy Policy
            </p>
            <div className="lg:flex space-x-3 hidden">
              <FaTwitter className="text-[#FFFFFF] size-6" />
              <FaDiscord className="text-[#FFFFFF] size-6" />
              <FaLinkedin className="text-[#FFFFFF] size-6" />
            </div>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              &copy; 2024 FutureTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
