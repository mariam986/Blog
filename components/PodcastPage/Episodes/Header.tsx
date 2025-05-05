import React from "react";

const Header = () => {
  return (
    <div className="bg-[#1A1A1A]  w-full ">
      <div className="w-[90%]  mx-auto flex flex-col lg:flex-row py-[100px]  ">
        <div className=" flex flex-col space-y-4 w-[100%] text-[#FFFFFF] ">
          <button className="w-fit rounded-[4px] bg-[#333333] lg:px-[10px] lg:py-[13px] font-medium lg:text-[20px] md:px-[8px] md:py-[4px] md:text-[16px] px-[8px] py-[4x] text-[14px]  ">
            Stay Informed with Fresh Content
          </button>
          <h1 className="font-medium lg:text-[58px] md:text-[44px] text-[28px]">
            Latest Podcast Episodes
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
