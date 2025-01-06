import React from "react";
import { TopHeader } from "../../components/header/topHeader";
import { MainHeader } from "../../components/header/mainHeader";
import { Footer } from "../../components/footer";
import { Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <TopHeader />
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};
