import React from "react";
import banner_home from "../../../../assets/banner_home.png";
import right_collan from "../../../../assets/right_collan.svg";
import left_collan from "../../../../assets/left_collan.svg";
import book_underline from "../../../../assets/book_underline.svg";
import home_banners from "../../../../assets/home_banners.svg";
import banner_book from "../../../../assets/banner_book.svg";

export const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full relative mb-4">
          <img src={banner_home} alt="banner_home" className="w-full h-full" />
          <div className="w-full absolute top-10 text-white">
            <div className="w-mainWidth mx-auto flex flex-col items-center relative py-4">
              <div className="w-mainWidth mx-auto my-24 flex justify-between gap-5 items-start">
                <div className="flex flex-col gap-4 w-3/4">
                  <p className="font-normal text-2xl font-josefin">
                    Discover the Power of a Healthy Gut
                  </p>
                  <div>
                    <h1 className="font-medium text-5xl">
                      Unlock the
                      <br />
                      <span className="text-mainColor relative leading-[70px] ">
                        Secrets of Your Gut
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
                    Are you ready to take control of your health and unlock the
                    true potential of your well-being? The journey begins in
                    your gut.
                  </p>

                  <div className="flex gap-4 items-center">
                    <button className="border-mainColor border-2 border-solid uppercase text-mainColor  py-2 px-8 rounded-lg max-[900px]:text-sm max-[600px]:text-xs max-[480px]:px-3">
                      Buy Book Now
                    </button>
                  </div>
                </div>
                <div className="w-full -mt-14 flex justify-end items-end relative">
                  <img
                    src={banner_book}
                    alt="banner_book"
                    className="absolute -top-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
