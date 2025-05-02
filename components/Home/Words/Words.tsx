import SectionHeader from "@/components/Helper/SectionHeader";
import Image from "next/image";
import React from "react";

const Words = () => {
  return (
    <div>
      <SectionHeader
        btn1="What Our Readers Say"
        title="Real Words from Real Readers"
        btn2="View All Testimonies"
      />
      <div className="w-full bg-[#141414]">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center ">
            <div className="flex flex-col space-y-20 items-center border-r-0 lg:border-r-2 border-[#262626] py-[60px] pr-0 lg:pr-[30px] border-b-2 lg:border-b-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/image2.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Sarah Thompson
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    San Francisco, USA
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The ebooks on AI in education have been a game-changer for my
                  research. They provide in-depth insights and case studies that
                  are invaluable for staying updated.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[5rem] xl:left-[9rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-20 items-center border-r-0 lg:border-r-2 border-[#1A1A1A] py-[60px] pr-0 lg:pr-[30px] pl-0 lg:pl-[30px] border-b-2 lg:border-b-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/image1.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Raj Patel
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Mumbai, India
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The whitepapers on renewable energy strategies have greatly
                  influenced my work. They offer detailed data and analysis,
                  helping me make informed decisions.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[5rem] xl:left-[9rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-20 items-center border-r-0  border-[#262626] py-[60px] pr-0  pl-0 lg:pl-[30px]">
              <div className="flex space-x-3">
                <Image
                  src="/images/image3.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Emily Adams
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    London, UK
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The AI in healthcare reports have been an essential resource
                  for our hospital. They highlight the latest innovations and
                  best practices, improving patient care.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[6rem] xl:left-[9rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141414] border-t-2 border-[#262626]">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center ">
            <div className="flex flex-col space-y-20 items-center border-r-0 lg:border-r-2 border-[#262626] py-[60px] pr-0 lg:pr-[30px] border-b-2 lg:border-b-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/image4.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Alan Jackson
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Houston, USA
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The reports on space mining prospects have fueled my passion
                  for space exploration. They provide a comprehensive view of
                  what lies beyond Earth.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[5rem] xl:left-[9rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-20 items-center border-r-0 lg:border-r-2 border-[#1A1A1A] py-[60px] pr-0 lg:pr-[30px] pl-0 lg:pl-[30px] border-b-2 lg:border-b-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/image5.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Jessica Miller
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Boston, USA
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The research papers on genomic breakthroughs have been a
                  goldmine of information. They&apos;ve shaped the direction of
                  my research in genomics.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[5rem] xl:left-[9rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-20 items-center border-r-0  border-[#1A1A1A] py-[60px] pr-0  pl-0 lg:pl-[30px] border-b-2 lg:border-b-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/image6.png"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-fit h-fit object-cover"
                />
                <div className="flex flex-col space-x-2">
                  <h1 className="font-medium text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]  text-[#FFFFFF]">
                    Diego Lopez
                  </h1>
                  <p className="font-normal text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px]  text-[#98989A]">
                    Barcelona, Spain
                  </p>
                </div>
              </div>
              <div className="relative border-2 px-[30px] pt-[50px] pb-[30px] bg-[#1A1A1A] border-[#262626] rounded-[12px] ">
                <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] text-center ">
                  The ebooks on renewable energy strategies have given me the
                  insights I needed to pivot our startup toward sustainability.
                </p>
                <Image
                  src="/images/star.png"
                  alt="icon"
                  width={120}
                  height={120}
                  className="w-fit h-fit object-cover absolute -top-3 left-32 md:left-[19rem] lg:left-[6rem] xl:left-[9rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
