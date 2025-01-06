import React from "react";
import mobileTablet from "../../../assets/mobileTablet.svg";

export const MobTabletView = () => {
  return (
    <div className="w-full py-20">
      <div className="w-4/5 mx-auto bg-mainBgColor h-[710px] rounded-2xl px-10 py-16">
          <div className="flex justify-between items-center gap-10">
        <div className="w-full">
          <p className="text-SecondaryColor font-roboto uppercase font-medium text-sm flex gap-2 items-center">
            <div className="bg-SecondaryColor w-10 h-[2px] rounded-md"></div>
            WHY WAIT?
          </p>
          <h1 className="text-[32px] font-josefin font-medium py-1">
            Science-Backed Strategies & <br />
            <span className="text-SecondaryColor">
              Practical Tips for Lasting Change
            </span>
          </h1>
        </div>
        <div className="w-full">
          <p className="text-[#272D3ECC] font-roboto font-light text-lg py-1">
            The journey begins in your gut. Unlock the Secrets of Your Gut &
            Improve Wellbeing is your comprehensive guide to understanding and
            enhancing the vital connection between your gut health and overall
            well-being.
          </p>
        </div>
        </div>

        <div className="w-4/5 mx-auto relative flex justify-center items-center">
          <img src={mobileTablet} alt="mobileTablet" className="absolute top-16" />   
        </div>
      </div>
    </div>
  );
};
