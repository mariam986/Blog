import SectionHeader from "@/components/Helper/SectionHeader";
import Image from "next/image";
import React from "react";

const Videos = () => {
  return (
    <div>
      <SectionHeader
        btn1="Featured Videos"
        title="Visual Insights for the Modern Viewer"
        btn2="View All"
      />
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col space-y-4 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-[#262626] py-[60px] pr-0 lg:pr-[40px]">
              <Image
                src="/images/news5.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#FFFFFF]">
                Mars Exploration: Unveiling Alien Landscapes
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Embark on a journey through the Red Planet&apos;s breathtaking
                landscapes and uncover the mysteries of Mars.
              </p>
            </div>
            <div className="flex flex-col space-y-4  border-b-2 lg:border-b-0 border-[#262626] py-[60px] pl-0 lg:pl-[40px] ">
              <Image
                src="/images/news6.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#FFFFFF]">
                Blockchain Explained: A Revolution in Finance
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                Delve into the world of blockchain technology and its
                transformative impact on the financial industry
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#262626] hidden lg:block"></div>
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col space-y-4 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-[#262626] py-[60px] pr-0 lg:pr-[40px] ">
              <Image
                src="/images/news7.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#FFFFFF] ">
                Breaking the Silence: Mental Health Awareness in the Workplace
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                An exploration of the importance of mental health awareness and
                the initiatives reshaping workplaces for employee well-being.
              </p>
            </div>
            <div className="flex flex-col space-y-4  border-b-2 lg:border-b-0 border-[#262626] py-[60px] pl-0 lg:pl-[40px]">
              <Image
                src="/images/news8.png"
                alt="image"
                width={1000}
                height={1000}
                className="w-fit h-fit object-cover"
              />
              <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#FFFFFF]">
                Revolutionizing Investment Strategies
              </h1>
              <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A]">
                An in-depth look at global efforts to conserve biodiversity and
                safeguard endangered species from extinction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
