import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Last = () => {
  return (
    <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col w-[100%] lg:w-[40%] space-y-8 py-[60px] lg:py-[300px] xl:py-[200px] border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0   ">
            <Image
              src="/images/icon6.png"
              alt="icon"
              width={80}
              height={80}
              className="w-fit h-fit object-cover"
            />
            <h1 className="font-semibold  text-[20px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-[#ffffff]">
              Asked question
            </h1>
            <p className=" font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              If the question is not available on our FAQ section, Feel free to
              contact us personally, we will resolve your respective doubts.{" "}
            </p>
            <div className="relative">
              <button className="border border-[#262626] pl-[24px] pr-[38px] py-[18px] rounded-[8px] bg-[#1A1A1A] text-[#98989A] font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] ">
                Ask Question
              </button>
              <ArrowUpRightIcon className="absolute size-6 top-4 lg:top-5 left-32 lg:left-34 xl:left-38 text-[#FFD11A]" />
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[100%] lg:w-[60%] py-[40px] lg:py-0 lg:pl-[40] pl-0">
            <div className="border px-[34px] py-[34px] bg-[#1A1A1A] border-[#262626] rounded-[10px] ">
              <div className="flex items-center justify-between">
                <p className="font-medium  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                  What is AI?
                </p>
                <p className="text-[#FFFFFF]">-</p>
              </div>
              <div className="border-t-2 border-[#262626] mt-5"></div>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5">
                AI stands for Artificial Intelligence, which refers to the
                simulation of human intelligence in machines. It enables them to
                perform tasks like problem-solving, learning, and
                decision-making.
              </p>
            </div>
            <div className="border px-[24px] py-[24px] bg-[#1A1A1A] border-[#262626] rounded-[8px]">
              <div className="flex items-center justify-between">
                <p className="font-medium  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                  How can I listen to your podcasts?
                </p>
                <p className="text-[#FFD11A] ">+</p>
              </div>
            </div>
            <div className="border px-[24px] py-[24px] bg-[#1A1A1A] border-[#262626] rounded-[8px]">
              <div className="flex items-center justify-between">
                <p className="font-medium  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                  Are your podcasts free to listen to?
                </p>
                <p className="text-[#FFD11A] ">+</p>
              </div>
            </div>
            <div className="border px-[24px] py-[24px] bg-[#1A1A1A] border-[#262626] rounded-[8px]">
              <div className="flex items-center justify-between">
                <p className="font-medium  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                  Can I download episodes to listen offline?
                </p>
                <p className="text-[#FFD11A] ">+</p>
              </div>
            </div>
            <div className="border px-[24px] py-[24px] bg-[#1A1A1A] border-[#262626] rounded-[8px]">
              <div className="flex items-center justify-between">
                <p className="font-medium  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                  How often do you release new episodes?
                </p>
                <p className="text-[#FFD11A] ">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
