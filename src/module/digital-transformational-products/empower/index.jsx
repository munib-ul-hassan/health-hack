import { useRef, useEffect } from 'react';
import book_underline_dark from "../../../assets/book_underline_dark.svg";
import bookmock from "../../../assets/bookmock.png";
import CardSliderRightArrow from "../../../assets/card-slider-right-arrow.svg";
import CardSliderLeftArrow from "../../../assets/card-slider-left-arrow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';

export const EmpowerSection = () => {

    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        // Ensure swiper instance is initialized after component mount
        if (swiperRef.current) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.update(); // Update swiper instance with navigation refs
        }
    }, []);

    return (
        <section className='w-full pt-20 bg-mainBgColor'>
            <div className="w-full mx-auto flex flex-wrap justify-end items-center gap-y-10">
                <div className="w-full">
                    <h1 className="text-4xl font-medium text-center flex justify-center items-center  py-4 font-josefin">
                        Empower Your
                        <span className="text-SecondaryColor inline-block mx-2 relative w-max">
                            Health Journey
                            <img
                                src={book_underline_dark}
                                width={"190px"}
                                alt="book_underline_dark"
                                className="absolute top-9"
                            />
                        </span>
                        with Science
                    </h1>
                    <p className="text-center font-light mx-auto w-3/5 font-roboto">
                        Innovative Insights to Boost Your Health and Wellbeing
                    </p>
                </div>

                <div className="w-2/5">
                    <img src={bookmock} alt="bookmock" className='w-full' />
                </div>
                <div className="w-1/2 swiper-container relative">
                    <Swiper
                        ref={swiperRef}
                        // effect={'cards'}
                        // grabCursor={true}
                        // modules={[EffectCards]}
                        spaceBetween={15} // Spacing between slides
                        slidesPerView={2} // Show 3 slides at once
                        centeredSlides={true} // Center the active slide
                        loop={true} // Infinite loop
                        effect="coverflow" // You can also try 'cube' or 'fade' if needed
                        grabCursor={true} // Mouse pointer change to grab
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className='slider_cards'
                        modules={[Navigation, Autoplay, EffectCards]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                    >
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-10 rounded-xl">
                                <h3 className='font-semibold text-base mb-4 text-SecondaryColor'>Identifying Hidden Additives</h3>
                                <p className='text-xs font-light'>
                                    <ol className='list-decimal'>
                                        <li className='mb-2'>
                                            <b>Eat a Fiber-Rich Diet</b>
                                            <p>Opt for whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.</p>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Consume Plenty of Vegetables: Aim to include a variety of fiber-rich vegetables in your meals, such as broccoli, spinach, carrots, and sweet potatoes.</li>
                                                <li className='mb-1'>Add Legumes and Beans: Incorporate beans, lentils, and chickpeas into your diet for an extra boost of fiber.</li>
                                            </ul>
                                        </li>
                                        <li className='mb-2'>
                                            <b>Incorporate Probiotics</b>
                                            <ul className='list-disc pl-4'>
                                                <li className='mb-1'>Eat Fermented Foods: Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome.</li>
                                                <li className='mb-1'>Consider a Probiotic Supplement: If you're not getting enough</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        Include foods like yogurt, kefir, sauerkraut, kimchi, and miso in your diet, which are rich in probiotics that support a healthy gut microbiome. <br />
                                        • Consider a Probiotic Supplement: If you're not getting enough <br />
                                        • Consider a Probiotic Supplement: If you're
                                    </div>

                                    <b>Tips for Reading Labels</b>
                                    <div className="p-3 my-3 bg-[#F4F4F4] rounded-md text-[10px]">
                                        • Consider a Probiotic Supplement: If you're not getting enough
                                    </div>

                                    Whole grains like brown rice, quinoa, and oats. These are high in dietary fiber, which feeds beneficial gut bacteria.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        ref={prevRef}
                        onClick={() => swiperRef.current.swiper.slidePrev()} // Directly use Swiper's method
                        className="absolute left-40 top-1/2 z-10"
                    >
                        <img src={CardSliderLeftArrow} alt="" />
                    </button>
                    <button
                        ref={nextRef}
                        onClick={() => swiperRef.current.swiper.slideNext()} // Directly use Swiper's method
                        className="absolute right-40 top-1/2 z-10"
                    >
                        <img src={CardSliderRightArrow} alt="" />
                    </button>

                </div>
            </div>
        </section>
    )
}
