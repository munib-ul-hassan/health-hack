import React from "react";
import banner_book from "../../../assets/banner_book.svg";
import book_underline from "../../../assets/book_underline.svg";
import banner_sales from "../../../assets/banner_sales.svg";
import banner_sales_main from "../../../assets/banner_sales_main.png";
import { IoIosStar } from "react-icons/io";

import "./index.css";
export const SalesBanner = () => {
  return (
    <>
      <div className="nested_bg_banner w-full h-[850px] max-[900px]:h-[850px]">
        <img
          src={banner_sales_main}
          alt="banner_sales_main"
          className="w-full h-full"
        />
        <div className="bg_banner">
          <div className="content_section w-4/5 mx-auto flex justify-between items-center max-[1024px]:w-11/12 max-[900px]:flex-col">
            <div className="w-full">
              <h1 className="text-2xl font-semibold capitalize max-[900px]:text-sm">
                Discover the Power of a Healthy Gut
              </h1>
              <div className="py-4 max-[900px]:py-3">
                <h1 className="text-5xl font-semibold  leading-[65px] max-[900px]:text-4xl max-[900px]:leading-[45px] max-[600px]:text-2xl">
                  Unlock the <br />
                  <span className="text-mainColor relative">
                    Secrets of{" "}
                    <img
                      src={book_underline}
                      width={"190px"}
                      alt="book_underline"
                      className="absolute top-14 max-[900px]:w-40 max-[900px]:top-10 max-[480px]:top-7 max-[500px]:w-24"
                    />
                    Your Gut
                  </span>
                  <br />& Improve Wellbeing
                </h1>
              </div>
              <div className="py-3 w-4/5 max-[900px]:py-1 max-[900px]:w-full">
                <p className="!font-light text-lg max-[900px]:text-sm">
                  Are you ready to take control of your health and unlock the
                  true potential of your well-being? The journey begins in your
                  gut.
                </p>
              </div>
              <div>
                <p className="text-4xl !font-medium font-josefin max-[900px]:text-2xl">$34.90</p>
              </div>
              <div className="flex gap-2 items-center pt-2 pb-8 max-[786px]:pb-2 text-mainColor text-2xl max-[900px]:text-lg max-[900px]:gap-1">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar className="text-[#FFFFFF80]" />
                <p className="text-2xl text-[#FFFFFF80] max-[900px]:text-lg">(235)</p>
              </div>
                <div className="flex gap-4 items-center">
                <button className="border-mainColor border-2 border-solid uppercase text-mainColor  py-2 px-8 rounded-lg max-[900px]:text-sm max-[600px]:text-xs max-[480px]:px-3">
                Buy Book Now
              </button>
              <button className="border-[#FFFFFF] border-2 border-solid uppercase text-[#FFFFFF]  py-2 px-8 rounded-lg max-[900px]:text-sm max-[600px]:text-xs max-[480px]:px-3">
              View Other Books
              </button>
                </div>

            </div>
            <div className="w-full relative">
              <img
                src={banner_book}
                alt="banner_book"
                className="absolute -top-80 right-4 max-[1024px]:-right-8 max-[900px]:-top-10 max-[900px]:right-0 max-[600px]:-top-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <img
src={book_underline}
width={"200px"}
alt="book_underline"
/>{" "} */
}
