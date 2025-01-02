import React from "react";
import { TopHeader } from "../../../components/header/topHeader";
import { MainHeader } from "../../../components/header/mainHeader";
import { Card } from "./card";
import { CourseOutline } from "./courseOutline";
import { ProductBanner } from "./productBanner";
import { RelatedProduct } from "./relatedProduct";

export const Courses = () => {
  return (
    <div>
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
