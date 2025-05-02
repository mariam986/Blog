import Image from "next/image";
import React from "react";

const Trends = () => {
  return (
    <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col space-y-5 py-[60px] border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0 pr-0 lg:pr-[20px]">
            <Image
              src="/images/resources3.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
            <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
              FutureTech Trends 2024
            </h1>
            <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              An ebook that predicts upcoming technology trends for the next
              year, including AI developments
            </p>
            <div className="flex items-center justify-between">
              <button
                className=" border bg-[#141414] border-[#262626] rounded-[12px] px-[24px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                View Details
              </button>
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] px-[24px]  py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                Download PDF Now
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-5 py-[60px] border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0 px-0 lg:px-[20px]">
            <Image
              src="/images/resources4.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
            <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
              Space Exploration Ebook
            </h1>
            <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              An ebook that predicts upcoming technology trends for the next
              year, including AI developments
            </p>
            <div className="flex items-center justify-between">
              <button
                className=" border bg-[#141414] border-[#262626] rounded-[12px] px-[24px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                View Details
              </button>
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] px-[24px]  py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                Download PDF Now
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-5 py-[60px]   pl-0 lg:pl-[20px]">
            <Image
              src="/images/resources5.png"
              alt="image"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
            <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
              Quantum Computing Whitepaper
            </h1>
            <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
              An in-depth whitepaper exploring the principles, applications.
            </p>
            <div className="flex items-center justify-between">
              <button
                className=" border bg-[#141414] border-[#262626] rounded-[12px] px-[24px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                View Details
              </button>
              <button
                className=" border bg-[#1A1A1A] border-[#262626] rounded-[12px] px-[24px]  py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
              >
                Download PDF Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
