import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import book_curve from "../../../assets/book_curve.svg";

export const InfoSection = () => {
  return (
    <div className="w-full py-12 bg-mainBgColor">
      <div className="w-4/5 mx-auto flex justify-between items-start py-14 gap-10">
        <div className="w-full">
          <p className="text-SecondaryColor font-roboto uppercase font-medium text-sm flex gap-2 items-center">
            <div className="bg-SecondaryColor w-10 h-[2px] rounded-md"></div>
            ABOUT THIS BOOK
          </p>
          <h1 className="text-[32px] font-josefin font-medium py-4">
            Transform Your Precious Life with {" "}
            <span className="text-SecondaryColor">
              Proven Health Strategies
            </span>
          </h1>
          <p className="text-[#272D3ECC] font-roboto font-light text-base py-4">
            The journey begins in your gut. Unlock the Secrets of Your Gut &
            Improve Wellbeing is your comprehensive guide to understanding and
            enhancing overall well-being.
          </p>
          <ul>
            <li className="flex gap-2 items-start py-4">
              <IoIosCheckmarkCircle className=" text-2xl" />
              <p className="font-roboto font-normal text-base text-[#272D3ECC]">
                Learn how your gut influences overall well-being and take
                actionable steps to optimize it.
              </p>
            </li>
            <li className="flex gap-2 items-start py-4">
              <IoIosCheckmarkCircle className="text-2xl" />
              <p className="font-roboto font-normal text-base text-[#272D3ECC]">
                Access scientifically-backed methods for improving energy,
                digestion, immunity, and mental clarity.
              </p>
            </li>

            <li className="flex gap-2 items-start py-4">
              <IoIosCheckmarkCircle className="text-2xl" />
              <p className="font-roboto font-normal text-base text-[#272D3ECC]">
                Simple yet effective tools and tips to enhance your daily
                routine and achieve lasting health improvements.
              </p>
            </li>
            <li className="flex gap-2 items-start py-4">
              <IoIosCheckmarkCircle className=" text-2xl" />
              <p className="font-roboto font-normal text-base text-[#272D3ECC]">
                Tailored strategies to help you reach your unique health goals,
                based on your body’s needs.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-end items-end relative">
          <img src={book_curve} alt="book_curve" />
          <div className="w-full bg-SecondaryColor text-white rounded-2xl px-6 py-6 flex justify-between items-center absolute bottom-8">
            <div className="w-full border-r-[1px] border-[#FFFFFF4D] border-solid  flex flex-col justify-center items-center ">
            <p className="font-medium text-3xl">41</p>
            <p className="text-sm font-light">Total Pages</p>
            </div>
            <div className="w-full border-r-[1px] border-[#FFFFFF4D] border-solid mx-2 flex flex-col justify-start items-center">
              <p className="font-medium text-3xl">1256</p>
              <p className="text-sm font-light">Active Readers</p>
            </div>

            <div className="w-full flex justify-start items-center flex-col">
            <p className="font-medium text-3xl">1351</p>
            <p className="text-sm font-light">Subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
