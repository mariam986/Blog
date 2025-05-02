import React from "react";
import Header from "./Header";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const Episodes = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0 lg:border-r-2 pr-0 lg:pr-[30px] ">
              <Image
                src="/images/podcast3.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                AI in Healthcare
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                Dr. Lisa Adams discusses how AI is revolutionizing healthcare,
                from diagnostic tools to patient care.
              </p>
              <div className="w-[100%] relative xl:w-[50%]  lg:w-[70%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-46 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0 lg:border-r-2 px-0 lg:px-[30px] ">
              <Image
                src="/images/podcast4.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                AI Ethics
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                Explore the ethical dilemmas and considerations surrounding AI
                with guest speaker Dr. Michael Turner.
              </p>
              <div className="w-[100%] relative xl:w-[60%]  lg:w-[80%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-50 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0  pl-0 lg:pl-[30px] ">
              <Image
                src="/images/podcast5.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                Machine Learning Explained
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                Dive into the intricacies of machine learning with AI expert
                Sarah Davis. In this episode
              </p>
              <div className="w-[100%] relative xl:w-[50%]  lg:w-[70%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-46 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0 lg:border-r-2 pr-0 lg:pr-[30px] ">
              <Image
                src="/images/podcast6.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                AI and the Future of Work
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                Dr. Olivia White joins John Parker to discuss the evolving role
                of AI in the workplace.
              </p>
              <div className="w-[100%] relative xl:w-[50%]  lg:w-[70%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-46 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0 lg:border-r-2 px-0 lg:px-[30px] ">
              <Image
                src="/images/podcastt7.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                AI in Education
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                Explore the role of AI in education as Emily Turner discusses
                how AI is transforming the learning experience.
              </p>
              <div className="w-[100%] relative xl:w-[60%]  lg:w-[80%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-50 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
            <div className="flex flex-col space-y-5 py-[40px] border-r-0 border-b-2 border-[#262626] lg:border-b-0  pl-0 lg:pl-[30px] ">
              <Image
                src="/images/podcast8.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
              <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[22px] text-[#FFFFFF]">
                AI in Entertainment
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                David Smith as they explore the influence of AI in the
                entertainment industry.
              </p>
              <div className="w-[100%] relative xl:w-[50%]  lg:w-[70%]">
                <button className="relative bg-[#141414] border-2 border-[#262626] pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]">
                  Listen Podcast
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-5  xl:top-6 left-64 lg:left-40 xl:left-46 md:left-[28rem]  text-[#FFD11A]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
