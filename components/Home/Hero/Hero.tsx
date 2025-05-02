import { ArrowUpRightIcon, PlusIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[#141414]   ">
      <div className=" w-[90%] mx-auto h-full text-[#FFFFFF]">
        <div className="flex lg:flex-row flex-col justify-center items-center ">
          <div className="flex flex-col w-[100%] lg:w-[55%]  mt-60 lg:mt-[5rem] xl:mt-[5rem] border-r-0 lg:border-r-2 border-[#262626]">
            <h3 className="font-medium lg:text-[30px]   text-[18px] md:text-[24px] text-[#98989A] lg:pt-40">
              Your Journey to Tomorrow Begins Here
            </h3>
            <h1 className="font-medium text-[30px] md:text-[40px] xl:text-[70px] text-[#FFFFFF]lg:text-[55px]">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]  ">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn and reshape
              the future. Join us on this missionary expedition into the heart
              of AI.
            </p>
            <div className="border-t-2 border-[#262626] mt-20 ">
              <div className="flex  items-center justify-evenly text-center">
                <div className="flex flex-col items-center space-y-5 border-r-2 border-[#262626] w-[30%] py-10  ">
                  <h1 className="font-semibold text-[24px] md-text-[28px] lg:text-[30px] xl:text-[40px]">
                    300 <span className="text-[#FFD11A]">+</span>
                  </h1>
                  <p>Available Resources</p>
                </div>
                <div className="flex flex-col items-center space-y-5 border-r-2 border-[#262626] w-[30%] py-10  ">
                  <h1 className="font-semibold text-[24px] md-text-[28px] lg:text-[30px] xl:text-[40px]">
                    12K <span className="text-[#FFD11A]">+</span>
                  </h1>
                  <p>Total Downloads</p>
                </div>
                <div className="flex flex-col items-center space-y-5  w-[30%] py-10  ">
                  <h1 className="font-semibold text-[24px] md-text-[28px] lg:text-[30px] xl:text-[40px]">
                    10K <span className="text-[#FFD11A]">+</span>
                  </h1>
                  <p>Active Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%]  lg:w-[45%] relative    ">
            <Image
              src="/images/Abstract.png"
              alt="design"
              width={1000}
              height={1000}
              className=" w-full h-full lg:-mt-[7rem] xl:-mt-[1rem] "
            />
            <div className="absolute lg:top-[50%] top-[20%] md:top-[50%] left-[10%]">
              <Image
                src="/images/Sub.png"
                alt="profiles"
                width={200}
                height={200}
              />
              <h2 className="font-medium text-[18px] md:text-[20px] lg:text-[20px] xl:text-[24px] text-[#FFFFFF] mt-5">
                Explore 1000+ Resources
              </h2>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5  ">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
              <div className="relative mt-5 hover:scale-95 ">
                <button className="border-2 border-[#1A1A1A]  pl-[4rem] lg:pl-[2rem] md:pl-[8rem] md:pr-[12rem] pr-[7rem] lg:pr-[4rem] py-5 rounded-[12px] text-[14px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                  Explore Resources
                </button>
                <ArrowUpRightIcon className="size-6 text-[#FFD11A] top-5 left-52 lg:left-52 absolute md:left-64  " />
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 border-[#262626]">
          <div className="flex flex-col lg:flex-row items-center justify-evenly  ">
            <div className="flex flex-col space-y-6  justify-center lg:border-r-2 border-[#262626] border-b-2 lg:border-b-0 items-start py-10 lg:px-10  lg:w-[33%] w-[100%]">
              <Image
                src="/images/loading.png"
                alt="icon"
                width={30}
                height={30}
              />
              <div className="flex justify-between items-center lg:space-x-6 xl:space-x-20 space-x-20  md:space-x-96 ">
                <div className="flex flex-col space-y-2">
                  <h2 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF] ">
                    Latest News Updates
                  </h2>
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                    Stay Current
                  </p>
                </div>
                <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                  <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                </div>
              </div>
              <p className="font-normal text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#98989A] ">
                Over 1,000 articles published monthly
              </p>
            </div>
            <div className="flex flex-col space-y-6  justify-center lg:border-r-2 border-[#262626] border-b-2 lg:border-b-0 items-start py-10 lg:px-10  lg:w-[33%] w-[100%]">
              <Image src="/images/bee.png" alt="icon" width={30} height={30} />
              <div className="flex justify-between items-center lg:space-x-6 xl:space-x-20 space-x-20 md:space-x-96 ">
                <div className="flex flex-col space-y-2">
                  <h2 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]  ">
                    Expert Contributors
                  </h2>
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                    Trusted Insights
                  </p>
                </div>
                <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                  <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                </div>
              </div>
              <p className="font-normal text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#98989A] ">
                50+ Renowed AI experts on our team
              </p>
            </div>
            <div className="flex flex-col space-y-6  justify-center lg:border-r-2 border-[#262626] border-b-2 lg:border-b-0 items-start py-10 lg:px-10  lg:w-[34%] w-[100%]">
              <Image src="/images/leaf.png" alt="icon" width={30} height={30} />
              <div className="flex justify-between items-center lg:space-x-6 xl:space-x-20 space-x-20  md:space-x-96 ">
                <div className="flex flex-col space-y-2">
                  <h2 className="font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#FFFFFF]  ">
                    Global Readership
                  </h2>
                  <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] ">
                    Worldwide Impact
                  </p>
                </div>
                <div className=" relative rounded-full w-10 h-10 bg-[#FFD11A]">
                  <ArrowUpRightIcon className="absolute inset-2 size-6 text-black " />
                </div>
              </div>
              <p className="font-normal text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#98989A] ">
                2 million monthly readers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
