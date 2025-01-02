import React, { useState } from "react";
import bg from "../../assets/bg.png";
import kam from "../../assets/kam.svg";
import greenleave from "../../assets/greenleave.svg";
import facebook from "../../assets/facebook.svg";
import pantrest from "../../assets/pantrest.svg";
import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import x from "../../assets/x.svg";
import youtube from "../../assets/youtube.svg";
import book from "../../assets/book.svg";
import { GoArrowRight } from "react-icons/go";
import favpng_discounts from "../../assets/favpng_discounts.svg";
import DP from "../../assets/DP.svg";
import medBox from "../../assets/medBox.svg";
import users from "../../assets/users.svg";
import newsLetters from "../../assets/newsLetters.svg";
import { Link, useNavigate } from "react-router-dom";
import { CommunityModal } from "../../components/modal";
import { CheckoutButton } from "../../config/stripe";




const Card = (

) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>

      <div className="w-full my-4">
        <div className="w-[450px] mx-auto bg-white rounded-2xl pb-[2px]">
          <div className="relative">
            <img src={bg} alt="bg" className="w-full" />
            <div className="flex justify-center items-center absolute top-10 left-[30%]">
              <img src={kam} alt="kam" className="" />
            </div>
            <div className="content_Section mt-24">
              <div>
                <h1 className="text-3xl text-center font-bold">
                  Health Hack Hub
                </h1>
              </div>
              <div className="social_media_icons flex justify-center items-center gap-3 py-4">
                <div>
                  <a href="https://www.tiktok.com/@health_hack_hub_?_t=8s2uT72qohO&_r=1">
                    <img src={tiktok} alt="tiktok" />
                  </a>
                </div>
                <div>
                  <img src={instagram} alt="instagram" />
                </div>

                <div>
                  <a href="https://x.com/KasparKleijn">
                    <img src={x} alt="x" />
                  </a>
                </div>
                <div>
                  <Link to="/">
                    <img src={greenleave} alt="greenleave" />
                  </Link>
                </div>
                <div>
                  <a href="https://www.youtube.com/@health-hack-hub">
                    <img src={youtube} alt="youtube" />
                  </a>
                </div>

                <div>
                  <a href="https://www.threads/@health_hack_hub_">
                    <img src={pantrest} alt="pantrest" />
                  </a>
                </div>

                <div>
                  <a href="https://www.facebook.com/profile.php?id=61564027208700&mibextid=LQQJ4d">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
              </div>
              {/* box-shadow: 2px 4px 10px 4px #0000000A; */}

              {/* cards section */}
              <div className="cards flex flex-col gap-4 m-4">
                <button className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black">
                  <div className="flex gap-4 py-6">
                    <div className="bg-[#EAF6EA] p-2 w-20 rounded-lg flex justify-center items-center">
                      <img src={book} alt="book" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <h2 className="text-base font-bold">
                        Free Quick Start Guide
                      </h2>
                      <p className="text-xs text-[#161616]">
                        7 Everyday Foods That Sabotage Your Health
                      </p>
                    </div>
                  </div>
                  <Link to="/opt-in" className="w-full">
                    <button className="bg-black rounded-lg w-full py-3 text-white text-sm transition transform duration-200 active:scale-95 hover:bg-[#EAF6EA] hover:text-black">
                      Get Now
                    </button>
                  </Link>
                </button>

                <button
                  onClick={() => navigate("/newsletter")}
                  className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black"
                >
                  <div className="flex items-center justify-between  gap-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAF6EA] p-2 w-20 rounded-lg flex justify-center items-center">
                        <img src={newsLetters} alt="newsLetters" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-base font-bold">
                          Subscribe to our Newsletter
                        </h2>
                      </div>
                    </div>

                    <div className="">
                      <GoArrowRight className="text-white w-7 h-7 rounded-full p-[6px] flex justify-center items-center bg-black text-base transition transform duration-200 active:scale-80 cursor-pointer" />
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleOpen}
                  className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black"
                >
                  <div className="flex items-center justify-between  gap-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAF6EA] p-2 w-20 rounded-lg flex justify-center items-center">
                        <img src={users} alt="users" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-base font-bold">
                          Join the Community
                        </h2>
                      </div>
                    </div>

                    <div className="">
                      <GoArrowRight className=" text-white w-7 h-7 rounded-full p-[6px] flex justify-center items-center bg-black text-base transition transform duration-200 active:scale-95 cursor-pointer" />
                    </div>
                  </div>
                </button>

                <button
                sales
                  // href="https://health-hack-hub.com/sl-removing-harmful-foods/"
                  // target="blank"
                   onClick={() => navigate("/digital-transformational-products")}

                  className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black">
                  <div className="flex items-center justify-between  gap-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAF6EA] p-2 w-20 rounded-lg flex justify-center items-center">
                        <img src={DP} alt="DP" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-base font-bold">
                          Transformation Digital Products
                        </h2>
                      </div>
                    </div>
                    <div className="">
                      <GoArrowRight className="text-white w-7 h-7 rounded-full p-[6px] flex justify-center items-center bg-black text-base transition transform duration-200 active:scale-95 cursor-pointer" />
                    </div>
                  </div>
                </button>


                <button 
                  onClick={() => navigate("/products-the-community-supports")}
                  className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black"
                >
                  
                  <div className="flex items-center justify-between  gap-4 py-2">
                    <div className="flex items-center justify-between  gap-4 py-2">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#EAF6EA] p-2 w-28 rounded-lg flex justify-center items-center">
                          <img src={favpng_discounts} alt="favpng_discounts" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold text-left">
                            Discounts on Products the Community Supports
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <GoArrowRight className="text-white w-7 h-7 rounded-full p-[6px] flex justify-center items-center bg-black text-base transition transform duration-200 active:scale-95 cursor-pointer" />
                    </div>
                  </div>
                </button>

                <div className="bg-custom-gradient h-[2.2px]"></div>

                <a
                  href="https://thebiocode.io/pages/deep-sleep-rx-lp"
                  target="_blank"
                  className="shadow-custom px-4  rounded-lg w-full py-3  text-sm transition transform duration-200 hover:scale-105 text-black"
                >
                  <div className="flex items-center justify-between  gap-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAF6EA] p-2 w-20 rounded-lg flex justify-center items-center">
                        <img src={medBox} alt="medBox" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-bold">
                          Your Health Transformation Supplements
                        </h2>
                      </div>
                    </div>
                    <div className="">
                      <GoArrowRight className="text-white w-7 h-7 rounded-full p-[6px] flex justify-center items-center bg-black text-base transition transform duration-200 active:scale-95 cursor-pointer" />
                    </div>
                  </div>
                </a>

                <div className="bg-[#AEAEAE] w-24 h-1 mx-auto mt-4 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutButton/>
      <CommunityModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Card;
