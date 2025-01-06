import React from "react";
import tick from "../../../../../assets/tick.svg";
import { EbookArticlesBooks } from "./CourseArtsBoks";
import { EbookPaymentType } from "./paymentType";





export const EBookCourseOutline = () => {
  return (
    <div className="w-full">
      <div className="border-[1px] border-solid border-[#E0E0E0] bg-white rounded-lg p-8">
        <h1 className="text-2xl font-josefin font-medium">What you'll learn</h1>
        <div className="grid grid-cols-2 gap-4 py-6">
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          <div className="flex items-start gap-4">
            <img src={tick} alt="tick" className="py-[6px]" />
            <p className="font-roboto font-light">
            Learn The Fundamentals Of Healthy & Holistic Diets (Calories,
            Protein, Carbs, Fat, etc)
            </p>
          </div>
          
        </div>
    
      </div>
      <div className="border-y-2 border-solid border-[#E0E0E0] my-4 py-4">
           <h1 className="text-2xl font-josefin font-medium">Related topics</h1>
           <div className="flex items-center justify-start gap-4 my-4">
            <p className="border-[1px] border-solid border-[#2D2F31B2] rounded-3xl px-4 py-2 font-roboto font-light">Nutrition</p>
            <p className="border-[1px] border-solid border-[#2D2F31B2] rounded-3xl px-4 py-2 font-roboto font-light">Nutrition & Diet</p>
            <p className="border-[1px] border-solid border-[#2D2F31B2] rounded-3xl px-4 py-2 font-roboto font-light">Health & Fitness</p>
           </div>
          </div>
          <div>
            <EbookArticlesBooks/>
             <EbookPaymentType/>
          </div>
    </div>

  );
};
