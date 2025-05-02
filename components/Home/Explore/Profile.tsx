import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div className="w-full bg-[#141414]">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center space-x-3 py-[50px] overflow-x-auto scrollbar-hide w-full">
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] text-[14px] bg-[#141414]
          md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] whitespace-nowrap  "
          >
            All
          </button>
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
          >
            Quantum Computing
          </button>
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] whitespace-nowrap     "
          >
            AI Ethics
          </button>
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
          >
            Space Exploration
          </button>
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] whitespace-nowrap   "
          >
            Biotechnology
          </button>
          <button
            className="py-[24px] px-[30px] w-[100%] border-2 border-[#262626] rounded-[8px] 
          text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#98989A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF]  whitespace-nowrap   "
          >
            Renewable Energy
          </button>
        </div>

        <ProfileCard
          image="/images/profile1.png"
          name="John Techson"
          job="Quantum Computing"
          date="October 15,2023"
          title="The Quantum Leap in Computing"
          content="Explore the revolution in quantum computing, its application ,and its potential impact on various industries. "
        />
        <ProfileCard
          image="/images/profile2.png"
          name="Sarah Ethicist"
          job="AI Ethics"
          date="November 5,2023"
          title="The Ethical Dilemas of AI"
          content="A deep dive into ethical challenges posed by AI, including bias, privacy and transparency. "
        />
        <ProfileCard
          image="/images/profile3.png"
          name="Astronomer X"
          job="Space Exploration"
          date="December 10,2023"
          title="The Mass Colonization Challenge"
          content="Exploring the logical and technical challenges of human colonization on mars. "
        />
      </div>
    </div>
  );
};

export default Profile;
