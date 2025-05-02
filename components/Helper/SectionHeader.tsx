import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import React from "react";

type props = { btn1: string; title: string; btn2: string };

const SectionHeader = ({ btn1, title, btn2 }: props) => {
  return (
    <div className="bg-[#1A1A1A]  w-full ">
      <div className="w-[90%]  mx-auto flex flex-col lg:flex-row py-[100px]  ">
        <div className=" flex flex-col space-y-4 w-[100%] lg:w-[80%] text-[#FFFFFF] ">
          <button className="w-fit rounded-[4px] bg-[#333333] lg:px-[10px] lg:py-[13px] font-medium lg:text-[20px] md:px-[8px] md:py-[4px] md:text-[16px] px-[8px] py-[4x] text-[14px]  ">
            {btn1}
          </button>
          <h1 className="font-medium lg:text-[58px] md:text-[44px] text-[28px]">
            {title}
          </h1>
        </div>
        <div className="w-[100%] relative lg:w-[20%]   mt-10 lg:mt-20 ">
          <button className="relative bg-[#141414] border border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
            {btn2}
          </button>
          <ArrowUpRightIcon className="size-5 absolute  top-5  left-64 lg:left-36 xl:left-56 md:left-[28rem]  text-[#FFD11A]" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
