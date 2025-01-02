import React from "react";
import HealthHackHubLogo from "../../../assets/HealthHackHubLogo.svg";
import flag from "../../../assets/flag.svg";
import search_icon from "../../../assets/search_icon.svg";
import user_icon from "../../../assets/user_icon.svg";
import cart from "../../../assets/cart.svg";


export const MainHeader = () => {
  return (
    <div className="w-full border-b-2 border-solid  border-[#E0E0E0] bg-white">
      <div className="w-mainWidth mx-auto flex justify-between items-center text-black py-4 font-josefin text-sm">
        <div className="w-full flex items-center gap-2 text-base h-full">
          <img src={flag} alt="flag" /> <p className="pt-1">USD $</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="flex gap-8 items-center text-base">
            <li className="">Home</li>
            <li className="">Products</li>
            <li className="mx-5 w-32">
              <img
                src={HealthHackHubLogo}
                alt="HealthHackHubLogo"
                className=""
              />
            </li>
            <li className="">Community</li>
            <li className="">Blog</li>
          </ul>
        </div>
        <div className="w-full flex justify-end items-center">
        <ul className="flex gap-6 items-center text-base">
            <li>
               <img src={search_icon} alt="search_icon"/>
            </li>
            <li>
            <img src={cart} alt="cart"/>

            </li>
            <li>
            <img src={user_icon} alt="user_icon"/>

            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};
