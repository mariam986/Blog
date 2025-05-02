import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="w-full bg-[#141414] border-t-2 border-[#262626] ">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row  ">
        <div className="w-[100%] lg:w-[40%] py-[30px] lg:py-[100px] border-r-0 lg:border-r-2 border-[#262626] border-b-2 lg:border-b-0 flex flex-col space-y-4  ">
          <Image src="/images/box.png" alt="icon" width={80} height={80} />
          <h1 className="font-semibold xl:text-[40px] lg:text-[30px] md:text-[26px] text-[24px] text-[#FFFFFF] mt-10">
            Research Insights Blogs
          </h1>
          <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
            Dive deep into future technology concepts with our research section.
          </p>
        </div>
        <div className="w-[100%] lg:w-[60%] py-[20px] lg:py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-0 lg:ml-20 ">
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px]  bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Depth
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              500+ research articles for in-depth understanding.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626] rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Graphics
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Visual aids and infographics to enhance comprehension.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Trends
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Explore emerging trends in future technology research.
            </p>
          </div>
          <div className="flex flex-col space-y-5 border-2 py-[40px] px-[40px] bg-[#1A1A1A] border-[#262626]  rounded-[10px] ">
            <h1 className="font-medium xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] text-[#FFFFFF]">
              Contributors
            </h1>
            <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] text-[#98989A]">
              Contributions from tech researchers and academics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
