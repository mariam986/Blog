import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Revolution = () => {
  return (
    <div>
      <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col py-[50px] lg:py-[200px] w-[100%] lg:pr-[20px] xl:pr-[60px] pr-0 lg:w-[40%] space-y-5 border-r-0 border-b-2 lg:border-b-0 lg:border-r-2 border-[#262626]">
              <Image
                src="/images/icon1.png"
                alt="icon"
                width={80}
                height={80}
                className="w-fit h-fit object-cover"
              />
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[40px] text-[#FFFFFF] ">
                  AI Revolution
                </h1>
                <Image
                  src="/images/star.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-fit h-fit object-contain"
                />
              </div>
              <div className="relative flex justify-between  px-[30px] py-[30px] items-center border-2 rounded-[13px] bg-[#1A1A1A] border-[#262626]">
                <div className="flex flex-col space-y-3">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Host
                  </p>
                  <h2 className="font-medium  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                    Dr.Sarah Mitchell
                  </h2>
                </div>
                <div className="relative">
                  <button
                    className=" border bg-[#141414] border-[#262626] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                  >
                    Listen Podcast
                  </button>
                  <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-32 lg:left-32 xl:left-40" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[40px] w-[100%] lg:pl-[20px] xl:pl-[60px] pl-0 lg:w-[60%] space-y-5 ">
              <Image
                src="/images/podcast1.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
                Delves into the transformative impact of AI
              </h1>
              <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Join Dr. Sarah Mitchell as she delves into the transformative
                impact of AI on industries, featuring expert interviews and
                real-world case studies. Explore the possibilities of AI in
                healthcare, finance, and more.
              </p>
              <div className="flex flex-col lg:flex-row space-y-5 justify-between ">
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Total Episodes
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    50
                  </h2>
                </div>
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Average Episode Length
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    30 min
                  </h2>
                </div>
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Release Frequency
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    Weekly
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
                src="/images/icon2.png"
                alt="icon"
                width={80}
                height={80}
                className="w-fit h-fit object-cover"
              />
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[40px] text-[#FFFFFF] ">
                  AI Conversations
                </h1>
                <Image
                  src="/images/star.png"
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-fit h-fit object-contain"
                />
              </div>
              <div className="relative flex justify-between  px-[30px] py-[30px] items-center border-2 rounded-[13px] bg-[#1A1A1A] border-[#262626]">
                <div className="flex flex-col space-y-3">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Host
                  </p>
                  <h2 className="font-medium  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                    Mark Anderson
                  </h2>
                </div>
                <div className="relative">
                  <button
                    className=" border border-[#262626] bg-[#141414] rounded-[12px] pl-[24px] pr-[40px] py-[18px] font-normal 
                text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] "
                  >
                    Listen Podcast
                  </button>
                  <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-4 lg:top-5 absolute left-32 lg:left-32 xl:left-40" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-[40px] w-[100%] lg:pl-[20px] xl:pl-[60px] pl-0 lg:w-[60%] space-y-5 ">
              <Image
                src="/images/podcast2.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold  text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-[#FFFFFF]">
                Engage in thought-provoking conversations with leading experts.
              </h1>
              <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Mark discusses the future of AI, the impact on society, and how
                it's shaping industries worldwide. Engage in thought-provoking
                conversations with leading experts.
              </p>
              <div className="flex flex-col lg:flex-row space-y-5 justify-between ">
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Total Episodes
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    40
                  </h2>
                </div>
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] py-[30px] w-[100%] lg:w-[30%] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Average Episode Length
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    40 min
                  </h2>
                </div>
                <div className="flex flex-col space-y-3 border border-[#262626] bg-[#1A1A1A] rounded-[13px] w-[100%] lg:w-[30%] py-[30px] px-[30px] ">
                  <p className="font-normal  text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                    Release Frequency
                  </p>
                  <h2 className="font-medium  text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]">
                    Monthly
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
  );
};

export default Revolution;
