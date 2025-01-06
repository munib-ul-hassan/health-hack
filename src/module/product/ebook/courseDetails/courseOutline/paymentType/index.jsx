import React, { useState } from "react";
import Radio from "@mui/material/Radio";

export const EbookPaymentType = () => {
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
    <div className="w-full">
      <div className=" my-4 py-4">
        <h1 className="text-2xl font-josefin font-medium">
          Select Payment Type:
        </h1>

        <div className="flex gap-4 my-4 items-start">
          <div
            className="w-full cursor-pointer flex items-center justify-between gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-lg bg-[#EAF6EA] relative"
            onClick={() =>
              controlProps("a").onChange({ target: { value: "a" } })
            }
          >
            <div className="flex gap-4 items-center">
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
              <p>One-Time Purchase (10% Off)</p>
            </div>
            <div>
                <p className="text-lg font-semibold">$56.90</p>
            </div>
          </div>

          <div
            className="w-full cursor-pointer flex items-center justify-between gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-lg relative"
            onClick={() =>
              controlProps("b").onChange({ target: { value: "b" } })
            }
          >
            <div className="flex gap-4 items-center">
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
              <p>One-Time Purchase (10% Off)</p>
            </div>
            <div>
                <p className="text-lg font-semibold">$56.90</p>
            </div>
          </div>


        </div>

        
        <div className="py-4 font-roboto flex flex-col gap-1">
              <p>180 days 100% Money back Guarantee - <span className="text-[#848484]">No Question Asked</span> </p>
              <p className="text-[#848484] text-sm">Try with zero risk involved</p>
              <a href="#/" className="text-SecondaryColor text-sm underline">Read more</a>
          </div>
      </div>
    </div>
  );
};
