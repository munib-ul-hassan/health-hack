

import React, { useEffect, useState } from "react";
import HealthHackHubLogo from "../../../assets/HealthHackHubLogo.svg";
import flag from "../../../assets/flag.svg";
import search_icon from "../../../assets/search_icon.svg";
import user_icon from "../../../assets/user_icon.svg";
import cart from "../../../assets/cart.svg";
import { useLocation, useNavigate } from "react-router";
import book_underline_dark from "../../../assets/book_underline_dark-mainheader.svg";

export const MainHeader = () => {
  const location = useLocation(); // Hook to get the current URL
  const [currentUrl, setCurrentUrl] = useState([]); // State to store the URL
  const navigate = useNavigate()
  useEffect(() => {
    // Update the state whenever the location changes

    setCurrentUrl(location.pathname.split("/")[1]);
  }, [location]); // Dependency array ensures the effect runs on location change

  return (
    <div className="w-full border-b-2 border-solid  border-[#E0E0E0] bg-white navbar">
      <div className="w-mainWidth mx-auto flex justify-between items-center text-black py-2 font-josefin text-sm">
        <div className="w-full flex items-center gap-2 text-base h-full">
          <img src={flag} alt="flag" /> <p className="pt-1">USD $</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="flex gap-8 items-center text-base">
            <li className={`cursor-pointer nav-link ${currentUrl==""&&"active-link"}`} 
            onClick={()=>{

              navigate("/")
            }}
            >
               

              Home
              {currentUrl==""&&
             <img
                src={book_underline_dark}
                width={"190px"}
                alt="book_underline_dark"
                className="absolute top-8"
              />
              }
            </li>
            <li className={`cursor-pointer nav-link ${currentUrl=="products"&&"active-link"}`} 
            onClick={()=>{

              navigate("/products")
            }}>Products
            {currentUrl=="products"&&
             <img
                src={book_underline_dark}
                width={"190px"}
                alt="book_underline_dark"
                className="absolute top-8"
              />
              }
            </li>
            <li className="mx-5 w-32">
              <img
                src={HealthHackHubLogo}
                alt="HealthHackHubLogo"
                className=""
              />
            </li>
            <li className={`cursor-pointer nav-link ${currentUrl=="community"&&"active-link"}`}
            onClick={()=>{

              navigate("/community")
            }}>Community
              {currentUrl=="community"&&
             <img
                src={book_underline_dark}
                width={"190px"}
                alt="book_underline_dark"
                className="absolute top-8"
              />
              }
            </li>
            <li className={`cursor-pointer nav-link ${currentUrl=="blog"&&"active-link"}`} 
            onClick={()=>{

              navigate("/blog")
            }}> Blog
              {currentUrl=="blog"&&
             <img
                src={book_underline_dark}
                width={"190px"}
                alt="book_underline_dark"
                className="absolute top-8"
              />
              }
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-end items-center">
        <ul className="flex gap-6 items-center text-base">
            <li>
               <img src={search_icon} alt="search_icon"/>
            </li>
            <li>
            <img src={cart} alt="cart"/>

            </li>
            <li>
            <img src={user_icon} alt="user_icon"/>

            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};
