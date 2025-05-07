import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto pt-[15rem] lg:pt-[20rem] pb-[5rem] lg:pb-[10rem]">
          <div className="lg:flex flex-col space-y-5 hidden">
            <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-[#FFFFFF] ">
              Unlock a World of
            </h1>
            <div className="flex items-center gap-10">
              <h1 className="font-medium  text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-[#FFFFFF] ">
                Knowledge
              </h1>
              <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Dive deep into the AI universe with our collection of insightful
                podcasts. Explore the latest trends, breakthroughs, and
                discussions on artificial intelligence. Whether you&apos;re an
                enthusiast or a professional, our AI podcasts offer a gateway to
                knowledge and innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:hidden">
            <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[80px] text-[#FFFFFF]">
              Unlock a World of Knowledge
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you&apos;re an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between ">
            <div className="flex flex-col space-y-4 border-r-2 border-[#262626] w-[50%] lg:w-[24%] items-center py-[40px]">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px]  text-[#FFFFFF]">
                300 <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Resources available
              </p>
            </div>
            <div className="flex flex-col  space-y-4 border-r-0 lg:border-r-2 border-[#262626] py-[40px]  w-[50%] lg:w-[24%] items-center  ">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px] text-[#FFFFFF]">
                12k <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Total Downloads
              </p>
            </div>
            <div className="lg:flex hidden flex-col space-y-4 border-r-2 border-[#262626] py-[40px]  w-[24%] items-center ">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px] text-[#FFFFFF]">
                10k <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Active Users
              </p>
            </div>
            <div className="lg:flex hidden  flex-col space-y-4 py-[40px]  pl-10 w-[28%]  items-center ">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px] text-[#FFFFFF]">
                100 <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Countries Accesses Our Content
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414] border-t-2 border-[#262626] lg:hidden">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-4 border-r-2 border-[#262626] py-[50px]  w-[50%] items-center ">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px] text-[#FFFFFF]">
                10k <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                Active Users
              </p>
            </div>
            <div className="flex  flex-col space-y-4 py-[40px]  w-[50%]  items-center ">
              <h1 className="font-semibold text-[24px] md-text-[30px] lg:text-[40px] xl:text-[60px] text-[#FFFFFF]">
                100 <span className="text-[#FFD11A]">+</span>
              </h1>
              <p className="font-normal text-[14px] md-text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] text-center ">
                Countries Accesses Our Content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
