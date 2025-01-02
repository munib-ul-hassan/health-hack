import { useState } from "react";
import "./App.css";
import Start from "./module/start";
import { Routes, Route } from "react-router-dom";
import { OptIn } from "./module/opt-in";
import { PoptIn } from "./module/p-opt-in";
import { Newsletter } from "./module/newsletter";
import { DigitalTransformationalProducts } from "./module/digital-transformational-products";
import { ProductsCommunity } from "./module/products-the-community-supports";
import { Courses } from "./module/product/courses";
import { Products } from "./module/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/start" element={<Start />} />
        <Route path="/opt-in" element={<OptIn />} />
        <Route path="/p-opt-in" element={<PoptIn />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/digital-transformational-products" element={<DigitalTransformationalProducts/>} />
        <Route path="/products-the-community-supports" element={<ProductsCommunity />} />
         <Route path="products" element={<Products/>}>
         <Route  index element={<Courses/>}/>
         <Route path="courses" element={<Courses/>}/>
          <Route/>
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
