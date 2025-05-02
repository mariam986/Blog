import SectionHeader from "@/components/Helper/SectionHeader";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";

const Readers = () => {
  return (
    <div>
      <SectionHeader
        btn1="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        btn2="View All Resources"
      />
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row w-[100%] ">
            <div className="w-[100%] lg:w-[40%] py-[60px] lg:py-[100px] border-b-2 border-[#262626] lg:border-r-2 lg:border-b-0 flex flex-col space-y-3 pr-0 lg:pr-[60px] ">
              <Image
                src="/images/ebook.png"
                alt="icon"
                width={80}
                height={80}
              />
              <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-white">
                Ebooks
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#98989A]">
                Explore our collection of ebooks covering a wide spectrum of
                future technology topics.
              </p>
              <div className="w-[100%] relative mt-10 ">
                <button
                  className="relative bg-[#1A1A1A]  pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal 
                text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]"
                >
                  Download Ebooks Now
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-6  left-68 lg:left-36 xl:left-[22rem] md:left-[28rem]  text-[#FFD11A]" />
              </div>
              <div className="border-2 bg-[#1A1A1A] px-[30px] py-[30px] flex justify-between space-x-5 rounded-[13px] w-[100%] lg:w-[90%] xl:w-[80%] border-[#262626] ">
                <div className="flex flex-col space-y-3">
                  <h3 className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Downloaded By
                  </h3>
                  <h1 className="font-semibold text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
                    10k + Users
                  </h1>
                </div>
                <Image
                  src="/images/Sub.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover mt-5"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-6 w-[100%] lg:w-[60%] pl-0 lg:pl-[50px] py-[60px]">
              <div className="flex space-x-8">
                <h1 className="font-semibold text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF] whitespace-nowrap">
                  Variety of Topics
                </h1>
                <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                  Topics include AI in education (25%), renewable energy (20%),
                  healthcare(15%), space exploration (25%) , and biotechnology
                  (15%).
                </p>
              </div>
              <Image
                src="/images/ebook1.png"
                alt="icon"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between ">
                <div className="flex flex-col space-y-5 border-2 bg-[#1A1A1A] w-[100%] lg:w-[40%] px-[30px] py-[30px] rounded-[13px] border-[#262626]">
                  <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Total Ebooks
                  </p>
                  <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                    Over 100 ebooks
                  </h1>
                </div>
                <div className="flex flex-row justify-between border-2 bg-[#1A1A1A] w-[100%] lg:w-[55%] px-[30px] py-[30px] rounded-[13px] border-[#262626]">
                  <div className="flex flex-col space-y-3">
                    <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                      Download Formats
                    </p>
                    <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                      PDF formats for access.
                    </h1>
                  </div>
                  <div className="relative">
                    <button className="pl-[24px] pr-[36px] py-[18px] bg-[#141414]  rounded-[10px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                      Preview
                    </button>
                    <IoEyeOutline className="absolute top-5  lg:top-6 left-[5rem] lg:left-[7rem] text-[#FFD11A] " />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 border-2 bg-[#1A1A1A] w-[100%] px-[30px] py-[30px] rounded-[13px] border-[#262626] ">
                <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                  Average Author Expertise
                </p>
                <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                  Ebooks are authorised by renowed experts with an average of 15
                  years experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414] border-t-2 border-[#262626] ">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row w-[100%] ">
            <div className="w-[100%] lg:w-[40%] py-[60px] lg:py-[100px] border-b-2 border-[#262626] lg:border-r-2 lg:border-b-0 flex flex-col space-y-3 pr-0 lg:pr-[60px] ">
              <Image
                src="/images/paper.png"
                alt="icon"
                width={80}
                height={80}
              />
              <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-[#FFFFFF]">
                Whitepapers
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#98989A]">
                Dive into comprehensive reports and analyses with our collection
                of whitepapers.
              </p>
              <div className="w-[100%] relative mt-10 ">
                <button
                  className="relative bg-[#1A1A1A]  pl-[24px] w-[100%] pr-[44px] py-[18px] font-normal 
                text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] rounded-[12px] text-[#98989A]"
                >
                  Download Whitepapers Now
                </button>
                <ArrowUpRightIcon className="size-5 absolute  top-6  left-68 lg:left-36 xl:left-[24rem] md:left-[28rem]  text-[#FFD11A]" />
              </div>
              <div className="border-2 bg-[#1A1A1A] px-[30px] py-[30px] flex justify-between space-x-5 rounded-[13px] w-[100%] lg:w-[90%] xl:w-[80%] border-[#1A1A1A] ">
                <div className="flex flex-col space-y-3">
                  <h3 className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Downloaded By
                  </h3>
                  <h1 className="font-semibold text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF]">
                    10k + Users
                  </h1>
                </div>
                <Image
                  src="/images/Sub.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover mt-5"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-6 w-[100%] lg:w-[60%] pl-0 lg:pl-[50px] py-[60px]">
              <div className="flex space-x-8">
                <h1 className="font-semibold text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF] whitespace-nowrap">
                  Topics Coverage
                </h1>
                <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                  Whitepapers cover quantum computing (20%), AI ethics (15%),
                  space mining prospects (20%) ,AI in healthcare (15%), and
                  renewable energy strategies (30%).
                </p>
              </div>
              <Image
                src="/images/paper1.png"
                alt="icon"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between ">
                <div className="flex flex-col space-y-5 border-2 bg-[#1A1A1A] w-[100%] lg:w-[40%] px-[30px] py-[30px] rounded-[13px] border-[#262626]">
                  <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Total Whitepapers
                  </p>
                  <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                    Over 50 Whitepapers
                  </h1>
                </div>
                <div className="flex flex-row justify-between border-2 bg-[#1A1A1A] w-[100%] lg:w-[55%] px-[30px] py-[30px] rounded-[13px] border-[#262626]">
                  <div className="flex flex-col space-y-3">
                    <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                      Download Formats
                    </p>
                    <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                      PDF formats for access.
                    </h1>
                  </div>
                  <div className="relative">
                    <button className="pl-[24px] pr-[36px] py-[18px] bg-[#141414]  rounded-[10px] font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                      Preview
                    </button>
                    <IoEyeOutline className="absolute top-5  lg:top-6 left-[5rem] lg:left-[7rem] text-[#FFD11A] " />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 border-2 bg-[#1A1A1A] w-[100%] px-[30px] py-[30px] rounded-[13px] border-[#262626] ">
                <p className="font-normal text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                  Average Author Expertise
                </p>
                <h1 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px]">
                  Whitepapers are authored by subject matter experts with an
                  average of 20 years of experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readers;
