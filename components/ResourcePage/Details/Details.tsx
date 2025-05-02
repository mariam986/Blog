import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const Details = () => {
  return (
    <div>
      <Heading />
      <div>
        <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row ">
              <div className="flex flex-col py-[50px] lg:py-[200px] w-[100%] lg:pr-[20px] xl:pr-[60px] pr-0 lg:w-[40%] space-y-5 border-r-0 border-b-2 lg:border-b-0 lg:border-r-2 border-[#262626]">
                <Image
                  src="/images/icon3.png"
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-fit h-fit object-cover"
                />

                <h1 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[40px] text-[#FFFFFF] ">
                  Quantum Computing Whitepaper
                </h1>

                <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Provides technical specifications and requirements for
                  implementing quantum computing systems.
                </p>
              </div>
              <div className="flex flex-col py-[40px] w-[100%] lg:pl-[20px] xl:pl-[60px] pl-0 lg:w-[60%] space-y-8 ">
                <Image
                  src="/images/resources1.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-3">
                  <div className="flex flex-col w-[100%] lg:w-[65%] space-y-2">
                    <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
                      Quantum Computing Whitepaper
                    </h1>
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      An in-depth whitepaper exploring the principles,
                      applications, and potential impact of quantum computing.
                    </p>
                  </div>
                  <div className="relative w-[100%] lg:w-[32%] ">
                    <button
                      className=" border rounded-[12px] pl-[24px] border-[#262626] bg-[#1A1A1A]  pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                    >
                      Download PDF Now
                    </button>
                    <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-44 lg:left-32 xl:left-52" />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-5 justify-between ">
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Publication Date
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      July,2023
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Category
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      Quantum Computing
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Author
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      Dr. Quantum
                    </h2>
                  </div>
                  <div className=" flex-col space-y-3 border bg-[#1A1A1A] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] hidden ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Release Frequency
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      Weekly
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row ">
              <div className="flex flex-col py-[50px] lg:py-[200px] w-[100%] lg:pr-[20px] xl:pr-[60px] pr-0 lg:w-[40%] space-y-5 border-r-0 border-b-2 lg:border-b-0 lg:border-r-2 border-[#262626]">
                <Image
                  src="/images/icon4.png"
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-fit h-fit object-cover"
                />

                <h1 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[40px] text-[#FFFFFF] ">
                  Space Exploration Whitepaper
                </h1>

                <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                  Explores Mars colonization, asteroid resource potential, and
                  space tourism.
                </p>
              </div>
              <div className="flex flex-col py-[40px] w-[100%] lg:pl-[20px] xl:pl-[60px] pl-0 lg:w-[60%] space-y-8 ">
                <Image
                  src="/images/resources2.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                />
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 ">
                  <div className="flex flex-col w-[100%] lg:w-[65%] space-y-2">
                    <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
                      Space Exploration Whitepaper
                    </h1>
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      An in-depth whitepaper covering the latest advancements in
                      space exploration, including Mars missions and asteroid
                      mining.
                    </p>
                  </div>
                  <div className="relative w-[100%] lg:w-[32%] ">
                    <button
                      className=" border bg-[#1A1A1A] rounded-[12px] border-[#262626] pl-[24px] pr-[40px] py-[18px] font-normal 
                      text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                    >
                      Download PDF Now
                    </button>
                    <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-44 lg:left-32 xl:left-52" />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-5 justify-between ">
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Publication Date
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      September,2023
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Category
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      Space Exploration
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-3 border bg-[#1A1A1A] border-[#262626] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Author
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      FutureTech Space Division
                    </h2>
                  </div>
                  <div className=" flex-col space-y-3 border bg-[#1A1A1A] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] hidden ">
                    <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                      Release Frequency
                    </p>
                    <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                      Weekly
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
