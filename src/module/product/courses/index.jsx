import React from "react";
import { TopHeader } from "../../../components/header/topHeader";
import { MainHeader } from "../../../components/header/mainHeader";
import { Card } from "./card";
import { CourseOutline } from "./courseOutline";
import { ProductBanner } from "./productBanner";
import { RelatedProduct } from "./relatedProduct";
import { RouteBar } from "../routebar";

export const Courses = () => {
  return (
    <div>
      <div className="w-full mx-auto flex justify-start items-start my-2 gap-5 border-b-2 border-solid  border-[#E0E0E0] pb-4"> 

      <RouteBar/>
</div>
      <div className="w-mainWidth mx-auto flex justify-start items-start my-10 gap-10"> 
        <div className="w-1/3">
          <Card />
        </div>
        <div className="w-3/4">
          <CourseOutline />
        </div>
      </div>
      <ProductBanner/>
      <RelatedProduct/>
    </div>
  );
};
