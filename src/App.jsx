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
import { Home } from "./module/home";
import { Blog } from "./module/blog";
import { Community } from "./module/community";
import { EBook } from "./module/product/ebook";
import { AllCourses } from "./module/product/allCourses";
import { EbookCourseDetails } from "./module/product/ebook/courseDetails";
import { Signup } from "./module/authentication/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/opt-in" element={<OptIn />} />
        <Route path="/p-opt-in" element={<PoptIn />} />
        <Route path="/newsletter" element={<Newsletter />} />
        {/* <Route path="/digital-transformational-products" element={<DigitalTransformationalProducts/>} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="community" element={<Community />} />
        <Route path="signup" element={<Signup/>}/>
        <Route
          path="/products-the-community-supports"
          element={<ProductsCommunity />}
        />
        <Route path="products" element={<Products />}>
          <Route index element={<AllCourses />} />
          <Route path="courses">
            <Route index element={<AllCourses />} />
            {/* <Route path="pp-removing-harmful-foods" element={<Courses/>}/> */}
          </Route>
          {/* <Route path="e-book" element={<EBook/>}/> */}
          <Route path="e-books">
            <Route index element={<EBook />} />
            <Route
              path="sp-removing-harmful-foods"
              element={<DigitalTransformationalProducts />}
            />
            <Route
              path="pp-removing-harmful-foods"
              element={<EbookCourseDetails />}
            />
          </Route>

          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
