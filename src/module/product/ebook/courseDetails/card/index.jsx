import React, { useState } from "react";
import card_img from "../../../../../assets/card_img.svg";
import camera from "../../../../../assets/camera.svg";
import icon_article from "../../../../../assets/icon_article.svg";
import icon_downloadable from "../../../../../assets/icon_downloadable.svg";
import icon_lifetime from "../../../../../assets/icon_lifetime.svg";
import icon_video from "../../../../../assets/icon_video.svg";
import { IoIosStar } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";
import { CheckoutModal } from "../../../../../components/modal/checkoutModal";

export const EBookCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen =() => setOpen(true);
  return (
    <>

    <div className="w-full shadow-cardShadow border-[2px] border-solid border-[#E0E0E0] bg-white rounded-lg p-4">
      <div className="relative">
        <div className="absolute top-2 right-2 rounded-lg p-2 bg-white text-xs flex items-center justify-center gap-2">
          {/* <img src={camera} alt="camera" className="w-5" /> */}
          <LuBookOpen className="text-base"/>
           <span className="">1 E-Book</span>
        </div>
        <img src={card_img} alt="card_img" />
      </div>
      <div className="py-4">
        <h1 className="text-lg font-roboto font-semibold">
          Longevity Hacks: Live Longer, Live Better
        </h1>
        <p className="font-light font-roboto text-sm py-2">
          Become A Nutrition Expert: Create Holistic Diets & Meal Plans |
          Dieting Certificate For Health, Fitness & Wellness
        </p>
        <div className="py-2 flex justify-start items-center gap-1">
          <IoIosStar className="text-[#F9BF00]" />
          <IoIosStar className="text-[#F9BF00]" />
          <IoIosStar className="text-[#F9BF00]" />
          <IoIosStar className="text-[#F9BF00]" />
          <IoIosStar className="text-[#D9D9D9]" />
          <div className="px-2">
            <p className="underline text-SecondaryColor font-roboto font-normal">
              322 Reviews
            </p>
          </div>
        </div>
        <div className="py-2 flex items-center gap-2">
          <p className="text-2xl font-medium">$7.99</p>
          <p className="text-[#8B8B8B] text-lg">$11.90</p>
          <p className="text-[#FF6B6B] text-base px-1">16% Off</p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center gap-2 py-2">
            {/* <img src={icon_video} alt="icon_video" className="" /> */}
          <LuBookOpen className="text-xl"/>
            <span className="font-roboto text-sm">1 E-Book</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <img src={icon_downloadable} alt="icon_downloadable" className="" />
            <span className="font-roboto text-sm">5 articles</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <img src={icon_article} alt="icon_article" className="" />
            <span className="font-roboto text-sm">9 downloadable resources</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <img src={icon_lifetime} alt="icon_lifetime" className="" />
            <span>Full lifetime access</span>
          </div>
        
        </div>
      </div>
      <div>
      <button onClick={handleOpen} className="w-full bg-SecondaryColor text-white font-roboto text-center font-normal text-base py-3 rounded-lg mt-4">
          Add to Cart  <span className="px-4"> | </span>   $ 7.99
    </button>
      </div>
    </div>
    <CheckoutModal open={open} setOpen={setOpen}/>
    </>
  );
};
