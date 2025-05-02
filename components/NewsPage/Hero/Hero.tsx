import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { LuSend } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414]">
      <div className="w-[90%] mx-auto pt-[15rem] lg:pt-[20rem] pb-[5rem] lg:pb-[10rem]">
        <div className="lg:flex flex-col space-y-5 hidden">
          <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[80px] text-[#FFFFFF] ">
            Today&apos;s Headlines: Stay
          </h1>
          <div className="flex items-center gap-10">
            <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[80px] text-[#FFFFFF] ">
              Informed{" "}
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:hidden">
          <h1 className="font-medium text-[28px] md:text-[44px] lg:text-[55px] xl:text-[80px] text-[#FFFFFF] ">
            Today&apos;s Headlines: Stay Informed
          </h1>
          <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
            Explore the latest news from around the world. We bring you
            up-to-the-minute updates on the most significant events, trends, and
            stories. Discover the world through our news coverage.
          </p>
        </div>
      </div>
      <div className="border-t-2 border-[#262626] "></div>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 py-[60px]">
          <Image
            src="/images/news1.png"
            alt="image"
            width={1500}
            height={1500}
            className="w-fit h-fit object-cover"
          />
          <div className="flex flex-col space-y-8">
            <h1 className="font-semibold  text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#FFFFFF]">
              Global Climate Summit Addresses Urgent Climate Action
            </h1>
            <p className="font-normal text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#98989A] ">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-5 items-center">
              <div className="flex flex-col space-y-1">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Category
                </p>
                <h1 className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  Environment
                </h1>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Publication Date
                </p>
                <h1 className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  October 10, 2023
                </h1>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Author
                </p>
                <h1 className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  Jane Smith
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    14K
                  </p>
                  <CiHeart className="absolute lg:top-3 top-2 left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    204
                  </p>
                  <LuSend className="absolute lg:top-3 top-2  left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
              </div>
              <button
                className="border-2 px-[24px] py-[18px] rounded-[12px] border-[#262626] font-normal 
              text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#262626] "></div>
      <div className="w-[90%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5 space-x-5 space-y-5 py-[60px]">
          <div className="flex flex-col space-y-5 w-[100%] ">
            <Image
              src="/images/news2.png"
              alt="image"
              width={2000}
              height={2000}
              className="w-fit h-fit object-cover"
            />
            <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
              A Decisive Victory for Progressive Policies
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] text-[#98989A]">
              Politics
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    2.2K
                  </p>
                  <CiHeart className="absolute lg:top-3 top-2 left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    60
                  </p>
                  <LuSend className="absolute lg:top-3 top-2  left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
              </div>
              <div className="relative ">
                <button
                  className="border-2 px-[30px] lg:px-[80px] py-[18px] border-[#262626]  rounded-[12px]  font-normal 
              text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                >
                  Read More
                </button>
                <ArrowUpRightIcon className="size-5 text-[#FFD11A] absolute top-6 left-30 lg:left-48 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[100%] ">
            <Image
              src="/images/news3.png"
              alt="image"
              width={2000}
              height={2000}
              className="w-fit h-fit object-cover"
            />
            <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
              Tech Giants Unveil Cutting AI Innovations
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] text-[#98989A]">
              Technology
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    6K
                  </p>
                  <CiHeart className="absolute lg:top-3 top-2 left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    92
                  </p>
                  <LuSend className="absolute lg:top-3 top-2  left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
              </div>
              <div className="relative ">
                <button
                  className="border-2 px-[30px] lg:px-[80px] py-[18px] border-[#262626]  rounded-[12px]  font-normal 
              text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                >
                  Read More
                </button>
                <ArrowUpRightIcon className="size-5 text-[#FFD11A] absolute top-6 left-30 lg:left-48 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[100%]">
            <Image
              src="/images/news4.png"
              alt="image"
              width={2000}
              height={2000}
              className="w-fit h-fit object-cover"
            />
            <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
              COVID-19 Variants
            </h1>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] text-[#98989A]">
              Health
            </p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    10K
                  </p>
                  <CiHeart className="absolute lg:top-3 top-2 left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
                <div className="relative border-2 pl-[22px] pr-[16px] py-[8px] rounded-[100px] bg-[#1A1A1A] border-[#262626]">
                  <p className="ml-2 font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    124
                  </p>
                  <LuSend className="absolute lg:top-3 top-2  left-0 size-5 gap-3 ml-2 text-[#98989A] " />
                </div>
              </div>
              <div className="relative ">
                <button
                  className="border-2 px-[30px] lg:px-[80px] py-[18px] border-[#262626]  rounded-[12px]  font-normal 
              text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                >
                  Read More
                </button>
                <ArrowUpRightIcon className="size-5 text-[#FFD11A] absolute top-6 left-30 lg:left-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
