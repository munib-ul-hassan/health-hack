import React from "react";
import book_underline_dark from "../../../assets/book_underline_dark.svg";
import topic_one_img from "../../../assets/topic_one_img.svg";
import topic_two_img from "../../../assets/topic_two_img.svg";
import topic_three_img from "../../../assets/topic_three_img.svg";

export const Topics = () => {
  return (
    <div className="w-full py-12">
      <div className="w-4/5 mx-auto">
        <div className="">
          <h1 className="text-4xl font-medium text-center  flex justify-center items-center  py-4 font-josefin">
            Topics Covered In{" "}
            <span className="text-SecondaryColor relative w-max">
              {" "}
              The Book
              <img
                src={book_underline_dark}
                width={"190px"}
                alt="book_underline_dark"
                className="absolute top-8"
              />
            </span>
          </h1>
          <p className="text-center font-light mx-auto w-3/5 font-roboto">
          This guide is the culmination of my journey, filled with everything I learned about intermittent fasting and how it can revolutionize your health.
          </p>
        </div>

        <div>
          <div className="flex justify-between gap-8 my-12">
            <div className="w-1/3">
              <div className="flex flex-col items-center">
                <div className="bg-[#E6F0EB] w-full rounded-xl flex justify-center items-center px-4 py-12">
                  <img src={topic_one_img} alt="topic_one_img" className="" />
                </div>{" "}
                <div className="py-4">
                  <h1 className="text-[20px] font-semibold py-2 text-center">
                    The Gut-Brain Connection
                  </h1>
                  <p className="text-center font-light w-80">
                    Learn how your gut influences your mood, energy levels, and
                    cognitive function{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col items-center">
                <div className="bg-[#E6F0EB] w-full rounded-xl flex justify-center items-center px-4 py-12">
                  <img
                    src={topic_two_img}
                    alt="topic_two_img"
                    className=""
                  />
                </div>
                <div className="py-4">
                  <h1 className="text-[20px] font-semibold py-2 text-center">
                    Hidden Toxins in Everyday Foods
                  </h1>
                  <p className="text-center font-light w-80">
                    Identify and eliminate the foods that might be sabotaging
                    your health without you even knowing it.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col items-center">
                <div className="bg-[#E6F0EB] w-full rounded-xl flex justify-center items-center px-4 py-12">
                  <img src={topic_three_img} alt="topic_three_img" className="" />
                </div>
                <div className="py-4">
                  <h1 className="text-[20px] font-semibold py-2 text-center">
                    Simple Steps to a Healthier Gut
                  </h1>
                  <p className="text-center font-light w-80">
                    Discover easy-to-implement strategies that will improve your
                    digestion, boost your immune system, and increase your
                    energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
