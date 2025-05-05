import SectionHeader from "@/components/Helper/SectionHeader";
import ProfileCard from "@/components/Home/Explore/ProfileCard";
import React from "react";

const Headlines = () => {
  return (
    <div>
      <SectionHeader
        btn1="Welcome to Our News Hub"
        title="Discover the World of Headlines"
        btn2="View All News"
      />
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center space-x-3 py-[50px] overflow-x-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden  w-full">
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] text-[14px] 
          md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] whitespace-nowrap  "
            >
              All
            </button>
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
            >
              Technology
            </button>
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] whitespace-nowrap     "
            >
              Politics
            </button>
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
            >
              Health
            </button>
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]whitespace-nowrap   "
            >
              Environment
            </button>
            <button
              className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
            >
              Sports
            </button>
          </div>
          <ProfileCard
            image="/images/profile1.png"
            name="John Techson"
            job="Technology"
            date="October 15,2023"
            title="Tech Giants Announce New Product Line"
            content="Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape "
          />
          <ProfileCard
            image="/images/profile2.png"
            name="Sarah Ethicist"
            job="Technology"
            date="October 11,2023"
            title="The Future of Autonomous Vehicles"
            content="An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation. "
          />
          <ProfileCard
            image="/images/profile3.png"
            name="Astronomer X"
            job="Technology"
            date="December 10,2023"
            title="Tech Startups Secure Record Funding"
            content="An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape. "
          />
        </div>
      </div>
    </div>
  );
};

export default Headlines;
