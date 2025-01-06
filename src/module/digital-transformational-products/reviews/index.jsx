import React from 'react'
import book_underline_dark from "../../../assets/book_underline_dark.svg";
import ReviewsBg from "../../../assets/reviews-bg.png";
import arrow from "../../../assets/arrow.svg";
import stars from "../../../assets/stars.png";
import Rectangle247 from "../../../assets/Rectangle247.png";
import ArrowSliderRight from "../../../assets/arrow-slider-right.svg";
import ArrowSliderLeft from "../../../assets/arrow-slider-left.svg";
import Slider from "react-slick";




export const ReviewsSection = () => {

    const CustomPrevArrow = ({ className, style, onClick }) => (
        <button
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={ArrowSliderLeft} alt="ArrowSliderLeft" />
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

    const settings = {
        centerMode: true, // Enable center mode
        centerPadding: "400px", // Space on the sides of the center item
        slidesToShow: 2, // Number of slides to show
        infinite: true, // Enable infinite scrolling
        autoplaySpeed: 2000,
        autoplay: true,
        prevArrow: <CustomPrevArrow />, // Custom Previous Arrow
        nextArrow: <CustomNextArrow />, // Custom Next Arrow

        speed: 500, // Animation speed
        // dots: true, // Enable navigation dots
        arrows: true, // Enable navigation arrows
    };
    return (
        <div className='bg-cover -mt-16 bg-no-repeat bg-top py-40 text-white bg-mainBgColor' style={{ backgroundImage: `url(${ReviewsBg})` }} >
            <div className="w-full mx-auto flex flex-wrap justify-center items-center gap-y-10">
                <div className="w-full">
                    <div className="w-full flex justify-center items-center">
                        <span className='block p-2 px-6 text-lg rounded-md font-semibold text-black bg-white'>TESTIMONIALS</span>
                    </div>
                    <h1 className="text-4xl font-medium text-center flex justify-center items-center  py-4 font-josefin">
                        Our Success
                        <span className="text-SecondaryColor inline-block mx-2 relative w-max">
                            Stories
                        </span>
                    </h1>
                    <p className="text-center font-light mx-auto w-3/5 font-roboto">
                        New workers around the world trust The Bio Code. to choose their insurance.
                    </p>
                </div>
                <div className="w-full">
                    <Slider {...settings} className='slider__wrapper main_review'>
                        <div className='p-4'>
                            <div className=" bg-white/15 backdrop-blur-lg p-10 rounded-lg border-2 border-white/30">
                                <img src={stars} alt="stars" />
                                <p className='mt-2 mb-4'>"The Bio Code’s supplements give me sustained energy without crashes. As an entrepreneur, I value their commitment to quality and trust their environmentally responsible approach."</p>

                                <div className="authorbox flex gap-3">
                                    <img src={Rectangle247} alt="" />
                                    <div>
                                        <b>Markus</b>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className=" bg-white/15 backdrop-blur-lg p-10 rounded-lg border-2 border-white/30">
                                <img src={stars} alt="stars" />
                                <p className='mt-2 mb-4'>"The Bio Code’s supplements give me sustained energy without crashes. As an entrepreneur, I value their commitment to quality and trust their environmentally responsible approach."</p>

                                <div className="authorbox flex gap-3">
                                    <img src={Rectangle247} alt="" />
                                    <div>
                                        <b>Markus</b>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className=" bg-white/15 backdrop-blur-lg p-10 rounded-lg border-2 border-white/30">
                                <img src={stars} alt="stars" />
                                <p className='mt-2 mb-4'>"The Bio Code’s supplements give me sustained energy without crashes. As an entrepreneur, I value their commitment to quality and trust their environmentally responsible approach."</p>

                                <div className="authorbox flex gap-3">
                                    <img src={Rectangle247} alt="" />
                                    <div>
                                        <b>Markus</b>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className=" bg-white/15 backdrop-blur-lg p-10 rounded-lg border-2 border-white/30">
                                <img src={stars} alt="stars" />
                                <p className='mt-2 mb-4'>"The Bio Code’s supplements give me sustained energy without crashes. As an entrepreneur, I value their commitment to quality and trust their environmentally responsible approach."</p>

                                <div className="authorbox flex gap-3">
                                    <img src={Rectangle247} alt="" />
                                    <div>
                                        <b>Markus</b>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className=" bg-white/15 backdrop-blur-lg p-10 rounded-lg border-2 border-white/30">
                                <img src={stars} alt="stars" />
                                <p className='mt-2 mb-4'>"The Bio Code’s supplements give me sustained energy without crashes. As an entrepreneur, I value their commitment to quality and trust their environmentally responsible approach."</p>

                                <div className="authorbox flex gap-3">
                                    <img src={Rectangle247} alt="" />
                                    <div>
                                        <b>Markus</b>
                                        <p>Nutritionist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className='text-lg font-bold flex items-center justify-center gap-3 uppercase text-[#20ea6d] border-[#20ea6d] border-2 px-10 rounded-md py-3'>
                        Read More testimonials <img src={arrow} alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}
