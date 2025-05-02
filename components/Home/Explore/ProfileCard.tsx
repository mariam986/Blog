import { ArrowUpRightIcon, HeartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

type props = {
  image: string;
  job: string;
  name: string;
  date: string;
  title: string;
  content: string;
};

const ProfileCard = ({ image, job, name, date, title, content }: props) => {
  return (
    <div className="border-t-2 border-[#262626]">
      <div className=" flex py-[80px] flex-col lg:flex-row space-x-28 space-y-5">
        <div className="flex w-[100%] lg:w-[25%]  space-x-3">
          <Image
            src={image}
            alt="image"
            width={80}
            height={80}
            className="w-fit h-fit object-contain"
          />
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-[18px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-[#FFFFFF] whitespace-nowrap ">
              {name}
            </h2>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] whitespace-nowrap ">
              {job}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[100%] lg:w-[50%]  ">
          <p className="font-semibold text-[18px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-[#98989A] ">
            {date}
          </p>
          <h1 className="font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] text-[#FFFFFF] mt-5 ">
            {title}
          </h1>
          <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#98989A] mt-5 ">
            {content}
          </p>
          <div className="flex  space-x-3 mt-10">
            <div className="relative">
              <button className=" text-[#98989A] border-2 rounded-[100px] bg-[#1A1A1A] py-[8px] pl-[28px] pr-[20px] border-[#262626] ">
                24.5k
              </button>
              <CiHeart className="top-3 size-5 text-[#98989A] absolute left-1 " />
            </div>
            <div className="relative text-[#98989A]">
              <button className="relative  border-2 rounded-[100px] bg-[#1A1A1A]  py-[8px] pl-[28px] pr-[20px] border-[#262626]  ">
                50
              </button>
              <FaRegComment className="top-3 size-5 absolute left-1 " />
            </div>
            <div className="relative text-[#98989A]">
              <button className="relative border-2 rounded-[100px] bg-[#1A1A1A] py-[8px] pl-[28px] pr-[20px] border-[#262626]   ">
                20
              </button>
              <LuSend className="top-3 size-5 absolute left-1 " />
            </div>
          </div>
        </div>
        <div className=" relative lg:w-[20%] w-[100%]   mt-10    ">
          <button className="relative bg-[#141414] pl-[24px] w-[100%] pr-[44px] border-[#262626] border-2 py-[18px] font-normal text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] rounded-[12px] text-[#98989A]">
            View Blog
          </button>
          <ArrowUpRightIcon className="size-5 absolute  top-5  left-68 lg:left-28 xl:left-48 md:left-60  text-[#FFD11A]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
