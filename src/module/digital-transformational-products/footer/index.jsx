import React from "react";
import footer_bg from "../../../assets/footer_bg.png";
import { FiDownload } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-full relative pt-20 mt-72">
      <img src={footer_bg} alt="footer_bg" className="w-full" />
      <div className="w-full absolute top-44 text-white">
        <div className="w-4/5 mx-auto flex flex-col justify-center items-center gap-4 pt-40">
          <div>
            <p className="bg-mainBgColor rounded-3xl px-5 py-1 text-SecondaryColor font-roboto">
              BELI BUKU
            </p>
          </div>
          <h1 className="text-[32px] font-roboto font-medium">
            From Rock Bottom to Radiance
          </h1>
          <p className="font-roboto font-light text-lg py-1 w-2/4 text-center">
            Are you ready to take control of your health and unlock the true
            potential of your well-being?{" "}
          </p>
          <div className="flex gap-8 items-center">
            <button className="font-roboto flex justify-center items-center gap-4">
              <span>
                <FiDownload className="text-xl" />
              </span>
              <div className="flex flex-col justify-start items-start">
                <span className="text-sm">Total Downloads</span>
                <span className="text-lg">1,234+</span>
              </div>
            </button>
            <button className="border-FFFFFF border-2 border-solid uppercase text-FFFFFF  py-2 px-8 rounded-lg">
              Buy Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#161616] py-3">
        <p className="text-center text-sm text-white font-roboto">
          Copyright © 2024 . All rights reserved - Health Hack Hub
        </p>
      </div>
    </div>
  );
};
