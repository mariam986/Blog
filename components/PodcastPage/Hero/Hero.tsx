import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414]">
      <div className="w-[90%] mx-auto pt-[15rem] lg:pt-[20rem] pb-[5rem] lg:pb-[10rem]">
        <div className="lg:flex flex-col space-y-5 hidden">
          <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-[#FFFFFF] ">
            Unlock the World of Artificial Intelligence
          </h1>
          <div className="flex items-center gap-10">
            <h1 className="font-medium w-[50%] text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-[#FFFFFF]">
              through Podcasts
            </h1>
            <p className="font-normal w-[50%] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore the latest trends, breakthroughs, and
              discussions on artificial intelligence. Whether you're an
              enthusiast or a professional, our AI podcasts offer a gateway to
              knowledge and innovation.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:hidden">
          <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[80px] text-[#FFFFFF]">
            Unlock the World of Artificial Intelligence through Podcasts
          </h1>
          <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
