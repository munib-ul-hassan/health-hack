import React from "react";
import product_bg from "../../../../assets/product_bg.png";
import adv_banner from "../../../../assets/adv_banner.svg";
import camera from "../../../../assets/camera.svg";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export const AdvertisementBanner = () => {
  return (
    <div>
      <div className="w-full relative">
        <img src={product_bg} alt="product_bg" className="w-full h-[550px]" />
        <div className="w-full absolute top-10 text-white">
          <div className="w-mainWidth mx-auto flex gap-8 justify-between items-center relative">
            <div className="w-2/5">
              <div className="absolute top-[0px]">
                <img src={adv_banner} alt="adv_banner" />
              </div>
            </div>
            <div className="w-3/5 flex justify-start items-start flex-col gap-4 mt-20">
              <div className="rounded-lg py-1 px-8 bg-[#FFFFFF40] font-light flex items-center justify-center gap-2 text-xl">
                <span>Discover the Power of a Healthy Gut</span>
              </div>

              <div>
                <h1 className="text-2xl font-normal">
                  A comprehensive Guide to remove harmful foods
                </h1>
                <p className="text-lg font-roboto font-light py-2 w-4/5">
                  Experience razor-sharp focus and mental clarity – empower
                  yourself to accomplish more, think faster. Experience
                  razor-sharp focus and mental clarity – empower yourself to
                  accomplish more, think faster...
                </p>
                <div className="py-2 flex items-center gap-2">
                  <p className="text-3xl font-medium">$34.90</p>
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
                  <p className="text-mainColor text-lg">READ FULL Details</p>
                  <div className="bg-mainColor rounded-full">
                    <IoIosArrowRoundForward className="text-black text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
