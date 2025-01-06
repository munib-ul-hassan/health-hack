import bg from "../../../assets/component4.png";
import book_underline_dark from "../../../assets/book_underline_dark2.svg";
import arrow from "../../../assets/arrow.svg";
import arrow2 from "../../../assets/arrow2-white.svg";
import { useState } from "react";

export const Component4 = () => {
  let [data, setdata] = useState([
    [
      "Low confidence",
      "Gain confidence with proven strategies",
      "feeling confident",
    ],
    [
      "Low unsupported",
      "Join a supportive, thriving community",
      "feeling connection",
    ],
    [
      "Low energy",
      "Unlock energy, clarity, and vitality.",
      "feeling energized",
    ],
    [
      "Just surviving",
      "Learned easy-to-implement strategies",
      "feeling vibrant",
    ],
    [
      "feeling passive",
      "Lead your health and inspire others",
      "feeling proactive",
    ],
  ]);
  return (
    <div className="relative h-screen w-full">

    <div
      // className="w-mainwidth py-14 inset-0 bg-cover blur my-10 px-[10rem] "
    className="absolute  bg-cover bg-center blur-image h-[100rem]"
      style={{ backgroundImage: `url(${bg})` }}
    >
    </div>
      <div className="relative  
      w-mainwidth py-16  my-10 px-[10rem]
      items-center justify-center h-full mx-auto">
        <div className="justify-center items-center text-white text-4xl ">
          <h1
            className="text-SecondaryColor text-[#20EA6D]  
          text-center  flex justify-center items-center
          "
          >
            THE TRANSFORMATION
            <img
              src={book_underline_dark}
              width={"150px"}
              alt="book_underline_dark"
              className="absolute top-28"
            />
          </h1>
        </div>

        <div className="mt-10">
          {data.map((i) => {
            return (
              <div className="flex space-x-12 items-start justify-start   font-[Optima] space-y-3 ">
                <div className="w-2/5 flex items-center space-x-2 text-xl text-[#FF857B] font-semiBold uppercase py-3 my-2">
                  {i[0]}
                </div>
                <div className="w-3/5 flex items-start py-3 my-2 font-roboto">
                  <p className="text-[#FFFFFF] font-roboto">{i[1]}</p>
                </div>
                <div className="w-1/5 flex items-start py-3 my-2">
                  <img
                    src={arrow2}
                    alt="book_underline_dark"
                    className="mt-1"
                  />
                </div>
                <div className="w-1/5 flex items-start font-josefin uppercase py-3 my-2">
                  <span className="text-[white]">{i[2].split(" ")[0]}</span>
                  <span className="text-[#20EA6D] ml-1">
                    {i[2].split(" ")[1]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="border-mainColor mb-10 border-[#20EA6D] font-[#20EA6D] flex items-center justify-center border-4 font-bold  gap-3 uppercase text-mainColor font-[optima] py-2 my-10 px-8 rounded-lg">
          EXPLORE OUR PRODUCTS
          <img alt="arrow" src={arrow} />
        </button>
      </div>
    </div>
  );
};
