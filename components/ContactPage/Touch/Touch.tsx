"use client";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Touch = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col w-[100%] lg:w-[40%] space-y-4 py-[60px] lg:py-[300px] xl:py-[200px] border-r-0 border-[#262626] border-b-2 lg:border-r-2 lg:border-b-0   ">
            <Image
              src="/images/icon5.png"
              alt="icon"
              width={80}
              height={80}
              className="w-fit h-fit object-cover"
            />
            <h1 className="font-medium  text-[28px] md:text-[40px] lg:text-[44px] xl:text-[58px] text-[#FFFFFF]">
              Get in Touch with AI Podcasts
            </h1>
          </div>
          <form className="flex flex-col w-[100%] lg:w-[60%] py-[40px]  space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2   ">
              <div className="flex flex-col space-y-3 pl-0 lg:pl-10">
                <label className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full h-[67px] bg-[#1A1A1A] border border-[#262626] placeholder:text-[#666666] placeholder:font-normal pl-5 rounded-[8px]
                      placeholder:text-[14px] placeholder:md:text-[15px] placeholder:lg:text-[16px] placeholder:xl:text-[18px] focus:outline-none
                      font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] shadow-[#191919] shadow-2xl "
                />
              </div>
              <div className="flex flex-col space-y-3 pl-0 lg:pl-10">
                <label className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full h-[67px] bg-[#1A1A1A] border border-[#262626]  placeholder:text-[#666666] placeholder:font-normal pl-5 rounded-[8px]
                      placeholder:text-[14px] placeholder:md:text-[15px] placeholder:lg:text-[16px] placeholder:xl:text-[18px] focus:outline-none
                      font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] shadow-[#191919] shadow-2xl  "
                />
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 ">
              <div className="flex flex-col space-y-3 pl-0 lg:pl-10">
                <label className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-[67px] bg-[#1A1A1A]  border border-[#262626]  placeholder:text-[#666666] placeholder:font-normal pl-5 rounded-[8px]
                      placeholder:text-[14px] placeholder:md:text-[15px] placeholder:lg:text-[16px] placeholder:xl:text-[18px] focus:outline-none
                      font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] shadow-[#191919] shadow-2xl  "
                />
              </div>
              <div className="flex flex-col space-y-3 pl-0 lg:pl-10">
                <label className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    placeholder: "Enter Phone Number",
                  }}
                  containerClass=" w-full "
                  inputClass=" !w-[100%]  !h-[67px] !bg-[#1A1A1A] !border-[#262626]  placeholder:text-[#666666] placeholder:font-normal  !rounded-[8px]
                      placeholder:text-[14px] placeholder:md:text-[15px] placeholder:lg:text-[16px] placeholder:xl:text-[18px] !focus:outline-none
                      font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]  !pl-20 "
                  buttonClass=" !bg-[#1A1A1A]  h-[67px] !pl-5  !border-[#262626]  !rounded-[8px] !focus:outline-none !focus:bg-transparent  "
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 pl-0 lg:pl-10">
              <label className="font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                Message
              </label>
              <textarea
                name="message"
                rows={8}
                placeholder="Enter Your Message"
                className="w-full h-[163px] bg-[#1A1A1A] border border-[#262626] placeholder:text-[#666666] placeholder:font-normal pl-5 rounded-[8px]
                      placeholder:text-[14px] placeholder:md:text-[15px] placeholder:lg:text-[16px] placeholder:xl:text-[18px] focus:outline-none
                      font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] placeholder:pt-10 shadow-[#191919] shadow-2xl "
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center pl-0 lg:pl-10">
              <div className="flex space-x-3 items-center">
                <input type="checkbox" className="size-5 " />
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF]">
                  I agree with Terms of Use and Privacy Policy
                </p>
              </div>
              <div className="border px-[34px] py-[14px] w-[100%] lg:w-[20%] text-center mt-5 lg:mt-0 rounded-[8px] bg-[#FFD11A] font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] ">
                Send
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Touch;
