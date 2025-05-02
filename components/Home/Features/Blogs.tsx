import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <div className="w-full bg-[#141414] ">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row  ">
        <div className="w-[100%] lg:w-[40%] py-[30px] lg:py-[100px] border-r-0 lg:border-r-2 border-[#262626] border-b-2 lg:border-b-0 flex flex-col space-y-4  ">
          <Image src="/images/tech.png" alt="icon" width={80} height={80} />
          <h1 className="font-semibold text-[#FFFFFF] xl:text-[40px] lg:text-[30px] md:text-[26px] text-[24px] text-[#FFFFFF]mt-10">
            Future Technology Blog
          </h1>
          <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
            Stay informed with our blog section dedicated to future technology.
          </p>
        </div>
        <div className="w-[100%] lg:w-[60%] py-[20px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-0 lg:ml-20 ">
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px]  bg-[#1A1A1A] border-[#262626] rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Quantity
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Variety
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Articles cover field like AI,robotics ,biotechnology and more.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Frequency
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Fresh content added daily to keep you up to date.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Authorative
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Written our team of tech experts and industry professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
