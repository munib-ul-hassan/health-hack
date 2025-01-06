import React from "react";
import banner_home from "../../../assets/banner_home.png";
import right_collan from "../../../assets/right_collan.svg";
import left_collan from "../../../assets/left_collan.svg";
import book_underline from "../../../assets/book_underline.svg";
import home_banners from "../../../assets/home_banners.svg";

export const Banner = () => {
  return (
    <div className="w-full bg-[white]">
      <div className="w-full relative mb-4">
        <img src={banner_home} alt="banner_home" className="w-full h-full" />
        <div className="w-full absolute top-10 text-white">
          <div className="w-mainWidth mx-auto flex flex-col items-center relative py-4">
            <div className="text-center flex gap-1 justify-center items-start">
              <img src={left_collan} alt="left_collan" />
              <p className="font-pattaya font-light text-lg">
                Not just another strategy, but a lifestyle - where results last
              </p>
              <img src={right_collan} alt="right_collan" />
            </div>
            <div className="w-mainWidth mx-auto my-24 flex justify-between gap-5 items-start">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-normal text-2xl font-josefin">
                  The Science of Extraordinary Health
                </p>
                <div>
                  <h1 className="font-medium text-5xl">
                    Join The Tribe,
                    <br />
                    <span className="text-mainColor relative leading-[70px] ">
                      A Community That Gets It
                      <img
                        src={book_underline}
                        width={"250px"}
                        alt="book_underline"
                        className="absolute top-16 max-[900px]:w-40 max-[900px]:top-10 max-[480px]:top-7 max-[500px]:w-24"
                      />
                    </span>
                  </h1>

                </div>
                <p className="font-roboto font-light text-lg my-4 pr-16">
                  A movement redefining what it means to live a healthy life, but not just that: performing at your top potential - and transform fast!
                  </p>


                  <div className="flex gap-4 items-center">
                <button className="border-mainColor border-2 border-solid uppercase text-mainColor  py-2 px-8 rounded-lg max-[900px]:text-sm max-[600px]:text-xs max-[480px]:px-3">
                Get Started
              </button>
              <button className="border-[#FFFFFF] border-2 border-solid uppercase text-[#FFFFFF]  py-2 px-8 rounded-lg max-[900px]:text-sm max-[600px]:text-xs max-[480px]:px-3">
              Explore Our Blog
              </button>
                </div>

              </div>
              <div className="w-full -mt-14 flex justify-end items-end">
                <img src={home_banners} alt="home_banners" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
