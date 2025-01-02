import React from "react";
import related_prod1 from "../../../../assets/related_prod1.svg";
import related_prod2 from "../../../../assets/related_prod2.svg";
import related_prod3 from "../../../../assets/related_prod3.svg";
import camera from "../../../../assets/camera.svg";

import { IoIosStar } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export const RelatedProduct = () => {
  return (
    <div className="w-full">
      <div className="w-mainWidth mx-auto my-20">
        <div className="bg-[#15543F1A] w-64 p-2 rounded-xl my-4 flex justify-center items-center mx-auto">
          <p className="uppercase font-roboto text-center text-SecondaryColor">
            related Courses
          </p>
        </div>
        <h1 className="text-4xl text-center font-medium py-4">
          Knowledge That Empowers{" "}
          <span className="text-SecondaryColor">You to Live Better</span>{" "}
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-8 mt-24">
          <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
            <div className=" absolute -top-20">
              <img src={related_prod1} alt="related_prod1" className="w-full" />
            </div>
            <div className="pt-40 flex flex-col items-center justify-center gap-4 px-12">
              <h1 className="font-roboto font-medium text-xl text-center">
                Anti-Inflammatory Eating Made Simple
              </h1>
        

              <div className=" flex items-center gap-2">
                <p className="text-xl font-medium">$34.90</p>
              </div>

              <div className="flex justify-start items-center gap-1">
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


              <p className="font-light text-base text-center">
                Learn how to reduce inflammation through diet for a healthier
                gut.
              </p>
            </div>

            <div className="absolute -bottom-10">
              <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                <p className="text-black text-sm">Enroll Now</p>
                <div className="bg-black rounded-full">
                  <IoIosArrowRoundForward className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>


          <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
            <div className=" absolute -top-20">
              <img src={related_prod2} alt="related_prod2" className="w-full" />
            </div>
            <div className="pt-40 flex flex-col items-center justify-center gap-4 px-12">
              <h1 className="font-roboto font-medium text-xl text-center">
                Anti-Inflammatory Eating Made Simple
              </h1>
        
              <div className=" flex items-center gap-2">
                <p className="text-xl font-medium">$34.90</p>
              </div>

              <div className="flex justify-start items-center gap-1">
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
              <p className="font-light text-base text-center">
                Learn how to reduce inflammation through diet for a healthier
                gut.
              </p>

            </div>

            <div className="absolute -bottom-10">
              <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                <p className="text-black text-sm">Enroll Now</p>
                <div className="bg-black rounded-full">
                  <IoIosArrowRoundForward className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>



          <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
            <div className=" absolute -top-20">
              <img src={related_prod3} alt="related_prod3" className="w-full" />
              <div className="relative">
                   <div className="absolute top-2 right-2 rounded-lg p-2 bg-white text-xs flex items-center justify-center gap-2">
                         <img src={camera} alt="camera" className="w-5" /> <span>3 hours</span>
                       </div>
              </div>
            </div>
            <div className="pt-40 flex flex-col items-center justify-center gap-4 px-12">
              <h1 className="font-roboto font-medium text-xl text-center">
                Anti-Inflammatory Eating Made Simple
              </h1>
        

              <div className=" flex items-center gap-2">
                <p className="text-xl font-medium">$34.90</p>
              </div>

              <div className=" flex justify-start items-center gap-1">
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

              <p className="font-light text-base text-center">
                Learn how to reduce inflammation through diet for a healthier
                gut.
              </p>
            </div>

            <div className="absolute -bottom-10">
              <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                <p className="text-black text-sm">Enroll Now</p>
                <div className="bg-black rounded-full">
                  <IoIosArrowRoundForward className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
   
        </div>
      </div>
    </div>
  );
};
