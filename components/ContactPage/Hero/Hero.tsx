import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414]">
      <div className="w-[90%] mx-auto pt-[10rem] lg:pt-[10rem] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col py-[60px] space-y-4 border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0">
            <h1 className="font-medium  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
              General Inquiries
            </h1>
            <div className="relative w-[100%] mt-5 lg:mt-10 pl-10 lg:pl-0 ">
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                contact@ai-podcasts.com
              </button>
              <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-62 lg:left-60 md:left-66 xl:left-64" />
            </div>
            <div className="relative w-[100%] pl-10 lg:pl-0 ">
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                +1 (123) 456-7890
              </button>
              <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-50  md:left-52 lg:left-44 xl:left-48" />
            </div>
          </div>
          <div className="flex flex-col py-[60px] space-y-4 border-r-0 border-[#262626] border-b-2 xl:border-r-2 lg:border-b-0 pl-0 lg:pl-[20px]">
            <h1 className="font-medium  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
              Technical Support
            </h1>
            <div className="relative w-[100%] mt-5 lg:mt-10 pl-10 lg:pl-0 ">
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                contact@ai-podcasts.com
              </button>
              <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-62 lg:left-60 md:left-66 xl:left-64" />
            </div>
            <div className="relative w-[100%] pl-10 lg:pl-0 ">
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                +1 (123) 456-7890
              </button>
              <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-50  md:left-52 lg:left-44 xl:left-48" />
            </div>
          </div>
          <div className="flex flex-col py-[60px] space-y-4 border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0 pl-0 xl:pl-[20px]">
            <h1 className="font-medium  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
              Our Office
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5 lg:mt-10 pl-10 lg:pl-0  ">
              Address: 123 AI Tech Avenue,
            </p>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] pl-10 lg:pl-0  ">
              Techville, 54321
            </p>
            <div className="relative w-[100%] pl-10 lg:pl-0 ">
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                Get Directions
              </button>
              <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-42 md:left-44 lg:left-36 xl:left-40" />
            </div>
          </div>
          <div className="flex flex-col py-[60px] space-y-4 border-r-0 border-[#262626] border-b-2  lg:border-b-0 pl-0 lg:pl-[20px]">
            <h1 className="font-medium  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
              Connect with Us
            </h1>
            <div className="flex items-center justify-between mt-5 lg:mt-10 pl-10 lg:pl-0">
              <div className="border bg-[#1A1A1A] border-[#262626] rounded-[6px] px-[40px] md:px-[80px] lg:px-[40px] py-[14px] ">
                <FaTwitter className="text-[#FFFFFF] size-6" />
              </div>
              <div className="border bg-[#1A1A1A] border-[#262626] rounded-[6px] px-[40px] md:px-[80px]  lg:px-[40px] py-[14px] ">
                <FaDiscord className="text-[#FFFFFF] size-6" />
              </div>
              <div className="border bg-[#1A1A1A] border-[#262626] rounded-[6px] px-[40px] md:px-[80px]  lg:px-[40px] py-[14px] ">
                <FaLinkedin className="text-[#FFFFFF] size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
