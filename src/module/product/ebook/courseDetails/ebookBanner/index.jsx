import React from "react";
import product_bg from "../../../../../assets/product_bg.png";
import adt_img from "../../../../../assets/adt_img.svg";
import camera from "../../../../../assets/camera.svg";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";

export const EbookBanner = () => {
  return (
    <div className="w-full relative mt-4">
      <img src={product_bg} alt="product_bg" className="w-full h-[550px]" />
      <div className="w-full absolute top-10 text-white">
        <div className="w-mainWidth mx-auto flex gap-8 justify-between items-center relative">
          <div className="w-2/5">
            <div className="absolute -top-[100px]">
              <img src={adt_img} alt="adt_img" />
            </div>
          </div>
          <div className="w-3/5 flex justify-start items-start flex-col gap-4 mt-20">
            <div className="rounded-lg p-2 bg-[#FFFFFF40] text-xs flex items-center justify-center gap-2">
            <LuBookOpen className="text-base"/>
            <span className="">1 E-Book</span>
            </div>

            <div>
              <h1 className="text-2xl font-normal">
                Master Your Sleep: A 4-Week Transformation Plan
              </h1>
              <p className="text-lg font-roboto font-light py-2">
                earn proven strategies to improve sleep quality and wake up
                energized.
              </p>
              <div className="py-2 flex items-center gap-2">
                <p className="text-3xl font-medium">$7.99</p>
              </div>

              <div className="py-2 flex justify-start items-center gap-1">
                <IoIosStar className="text-[#F9BF00]" />
                <IoIosStar className="text-[#F9BF00]" />
                <IoIosStar className="text-[#F9BF00]" />
                <IoIosStar className="text-[#F9BF00]" />
                <IoIosStar className="text-[#D9D9D9]" />
                <div className="px-2">
                  <p className=" font-roboto font-normal text-[#8B8B8B]">
                    (322)
                  </p>
                </div>
              </div>

              <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-[#20ea6d] border-[#20ea6d] border-2 px-10 rounded-2xl py-4 my-4 w-80">
                <p className="text-mainColor text-lg">
                  READ FULL Details
                </p>
                <div className="bg-mainColor rounded-full">
                <IoIosArrowRoundForward className="text-black text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
