import React from "react";

const Heading = () => {
  return (
    <div className="bg-[#1A1A1A]  w-full ">
      <div className="w-[90%]  mx-auto flex flex-col lg:flex-row py-[100px] space-x-2  ">
        <div className=" flex flex-col space-y-4 w-[100%] lg:w-[100%] ">
          <button className="w-fit rounded-[4px] bg-[#333333] lg:px-[10px] lg:py-[13px] font-medium lg:text-[20px] md:px-[8px] md:py-[4px] md:text-[16px] px-[8px] py-[4x] text-[14px]  ">
            Dive into the Details
          </button>
          <h1 className="font-medium lg:text-[58px] md:text-[44px] text-[28px]">
            In-Depth Reports and Analysis
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-2 space-y-3 py-[10px] border-2 border-[#262626] px-[10px]  rounded-[10px] bg-[#141414] w-fit lg:w-fit mt-10 lg:mt-0  ">
          <button
            className="border-2 border-[#262626] rounded-[10px] px-[38px] py-[18px] bg-[#141414] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]
          font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
          >
            Whitepapers
          </button>
          <button
            className="border-2 border-[#262626] rounded-[10px] px-[38px] py-[18px] bg-[#141414] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]
          font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
          >
            Ebooks
          </button>
          <button
            className="border-2 border-[#262626] rounded-[10px] px-[38px] py-[18px] bg-[#141414] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]
          font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
          >
            Reports
          </button>
          <button
            className="border-2 border-[#262626] rounded-[10px] px-[38px] py-[18px] bg-[#141414] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]
          font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] hidden "
          >
            Whitepapers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
