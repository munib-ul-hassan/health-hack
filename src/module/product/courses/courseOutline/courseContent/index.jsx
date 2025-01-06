import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import card_img1 from "../../../../../assets/card_img1.svg";
import card_img2 from "../../../../../assets/card_img2.svg";
import icon_document_small from "../../../../../assets/icon_document_small.svg";

export const CourseContent = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="w-full border-y-2 border-solid border-[#E0E0E0] my-8 py-4">
      <h1 className="text-2xl font-josefin font-medium">
        Select Product Option:
      </h1>
      <div className="flex gap-4 my-4 items-start">
        <div
          className="w-full cursor-pointer flex items-center flex-col p-5 border-[1px] border-solid border-[#E0E0E0] rounded-lg bg-[#EAF6EA] h-[500px] relative"
          onClick={() => controlProps("a").onChange({ target: { value: "a" } })}
        >
          <Radio
            {...controlProps("a")}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
              "&.Mui-checked": {
                color: "#006633",
              },
            }}
          />
          <div>
            <img src={card_img1} alt="card_img1" />
          </div>
          <div className="">
            <p className="font-roboto text-2xl my-2">
              Full Course + <span className="text-[#FF6B6B]">Free E-book</span>{" "}
            </p>
            <p className="text-center text-sm my-2">E-book included : </p>
            <div className="flex justify-center items-center gap-2 text-sm">
              <img src={icon_document_small} alt="icon_document_small" />
              <p className="text-SecondaryColor">Eliminating Harmful Food</p>
            </div>
      
          </div>


          <div className="absolute bottom-2">
            <div className="pb-4 pt-10 flex items-center justify-center gap-2 w-full">
              <p className="text-3xl font-medium">$53.90</p>
              <p className="text-[#8B8B8B] text-lg">$68.90</p>
              <p className="text-[#FF6B6B] text-lg px-3 pt-2 font-josefin">
                25% Off
              </p>
            </div>
            </div>
        </div>
        <div
          onClick={() => controlProps("b").onChange({ target: { value: "b" } })}
          className="w-full cursor-pointer flex items-center flex-col p-5 border-[1px] border-solid border-[#E0E0E0] rounded-lg h-[500px] relative"
        >
          <Radio
            {...controlProps("b")}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
              "&.Mui-checked": {
                color: "#006633",
              },
            }}
          />
          <div>
            <img src={card_img2} alt="card_img2" />
          </div>
          <div className="">
            <p className="font-roboto text-2xl my-2">
              Full Course + <span className="text-[#FF6B6B]">2 Free E-book</span>{" "}
            </p>
            <p className="text-center text-sm my-2">2 E-books included  : </p>
            <div className="flex justify-center items-center gap-2 text-sm py-2">
              <img src={icon_document_small} alt="icon_document_small" />
              <p className="text-SecondaryColor">Eliminating Harmful Food</p>
            </div>

            <div className="flex justify-center items-center gap-2 text-sm py-2">
              <img src={icon_document_small} alt="icon_document_small" />
              <p className="text-SecondaryColor">Gutmate Health Solution</p>
            </div>
      
          </div>


          <div className="absolute bottom-2">
            <div className="pb-4 pt-10 flex items-center justify-center gap-2 w-full">
              <p className="text-3xl font-medium">$43.90</p>
              <p className="text-[#8B8B8B] text-lg">$52.90</p>
              <p className="text-[#FF6B6B] text-lg px-3 pt-2 font-josefin">
                20% Off
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
