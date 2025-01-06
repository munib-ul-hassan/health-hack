import React from "react";
import star6 from "../../../../assets/star6.svg";
import img_1 from "../../../../assets/img_1.png";
import img_2 from "../../../../assets/img_2.png";
import img_3 from "../../../../assets/img_3.png";
import img_4 from "../../../../assets/img_4.png";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "./index.css";
import ArrowSliderRight from "../../../../assets/arrow2.svg";
import ArrowSliderLeft from "../../../../assets/arrow1.svg";
import { NavLink } from "react-router-dom";

export const AllBooks = () => {

const CustomPrevArrow = ({ className, style, onClick }) => (
        <button
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={ArrowSliderLeft} alt="ArrowSliderLeft"  />
        </button>
    );

    const CustomNextArrow = ({ className, style, onClick }) => (
        <button
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={ArrowSliderRight} alt="ArrowSliderRight" />
        </button>
    );

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true, // Enable infinite scrolling
        // autoplaySpeed: 2000,
        // autoplay: true,
        arrows: true, 
        prevArrow: <CustomPrevArrow />, // Custom Previous Arrow
        nextArrow: <CustomNextArrow />,
        customPaging: (i) => (
            <button style={{ color: '#000', padding: '5px', fontSize: '14px' }}>
                {i + 1} {/* Display the slide number */}
            </button>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
      <div className="w-full">
        <div>
          {/* <div className="w-mainWidth mx-auto"></div> */}
          <div className="w-full bg-[#FCFCFC] py-20">
            <div className="w-mainWidth mx-auto mb-20">

          
              <div className="w-full mt-24">

              <Slider {...settings} className='all_books_slider'>
              <div className='p-4'>
              <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className="absolute -top-36">
                    <img src={img_1} alt="img_1" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Gut Health: Eliminating harmful foods
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className="flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>

                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <NavLink to="/products/e-books/pp-removing-harmful-foods" className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </NavLink>
                </div>
                </div>

                <div className='p-4'>

                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_2} alt="related_prod2" className="w-full" />

                    <div className="absolute bottom-[90px] -left-8">
                      <img src={star6} alt="star6" />
                      <div className="font-roboto text-3xl font-medium absolute bottom-5 left-7 text-white">
                        <h1>
                          20% <br /> <span className="px-4">Off </span>{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      A comprehensive Guide to remove harmful foods
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className="flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>
                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                </div>


                <div className='p-4'>
                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_3} alt="img_3" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Gutmate: The nutrition navigator
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className=" flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>
                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             <div className='p-4'>
                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_4} alt="img_4" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Good Health in the 21st century
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className=" flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>

                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
</div>


<div className='p-4'>

                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_4} alt="img_4" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Good Health in the 21st century
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className=" flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>

                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>

</div>
<div className='p-4'>

                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_4} alt="img_4" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Good Health in the 21st century
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className=" flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>

                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
</div>


<div className='p-4'>
                <div className="w-full cursor-pointer flex items-center flex-col gap-4 p-5 border-[1px] border-solid border-[#E0E0E0] rounded-2xl bg-white relative">
                  <div className=" absolute -top-36">
                    <img src={img_4} alt="img_4" className="w-full" />
                  </div>

                  <div className="pt-40 flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-roboto font-medium text-xl text-center capitalize">
                      Good Health in the 21st century
                    </h1>

                    <div className=" flex items-center gap-2">
                      <p className="text-xl font-medium">$34.90</p>
                    </div>

                    <div className=" flex justify-start items-center gap-1">
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#F9BF00]" />
                      <IoIosStar className="text-[#D9D9D9]" />
                      <div className="px-2">
                        <p className=" font-roboto font-normal text-[#8B8B8B]">
                          (325)
                        </p>
                      </div>
                    </div>

                    <p className="font-light text-base text-center py-4">
                      Experience razor-sharp focus and mental clarity – empower
                      yourself to accomplish more, think faster...
                    </p>
                  </div>

                  <div className="absolute -bottom-10">
                    <div className="text-lg font-medium flex items-center justify-center gap-3 uppercase text-black border-black bg-white border-2 px-6 rounded-xl py-2 my-4">
                      <p className="text-black text-sm">BUY NOW</p>
                      <div className="bg-black rounded-full">
                        <IoIosArrowRoundForward className="text-white text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </Slider>







              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
