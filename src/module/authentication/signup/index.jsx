import React from 'react';
import bg_img_start from "../../../assets/bg_img_start.png"
import kasan_img from "../../../assets/kasan_img.svg";
import HealthHacklogo from "../../../assets/HealthHacklogo.svg";
import { Link } from 'react-router';
export const Signup = () => {
  return (
    <div className='w-full !overflow-y-hidden bg-[#E6F0EB] h-screen'>
      <div className='w-full px-2 mx-auto flex justify-between items-start gap-8 '>
            <div className='w-4/5 relative'>
            <img src={bg_img_start} alt="bg_img_start" className='w-full h-[98vh]  rounded-2xl mt-2' />
            <div className='absolute top-0 left-0 w-full h-4/5 mt-16 flex justify-center items-center'>
                <img src={kasan_img} alt="kasan_img" className='w-full h-full' />
            </div>
            </div>
            <div className='w-full h-full'>
                <div className='flex justify-center flex-col items-center h-full text-black'>
                    <div className='flex justify-center items-center pt-16'>
                    <img src={HealthHacklogo} alt="HealthHacklogo" className='w-4/5 h-full' />
                    </div>
                    <div className='form pt-7'> 
                        <form className='w-96 flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-base font-normal font-josefin'>Full Name</label>
                                <input type="text" id="name" className='w-full h-10 px-2 py-2 rounded-md border-none outline-none'  />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email" className='text-base font-normal font-josefin'>Email / Username</label>
                                <input type="email" id="email" className='w-full h-10 px-2 py-2 rounded-md border-none outline-none' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password" className='text-base font-normal font-josefin'>Password</label>
                                <input type="password" id="password" className='w-full h-10 px-2 py-2 rounded-md border-none outline-none'/>
                            </div>


                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email" className='text-base font-normal font-josefin'>Confirm Password</label>
                                <input type="password" id="password" className='w-full h-10 px-2 py-2 rounded-md border-none outline-none'/>
                            </div>

                            <button className='w-full h-12 px-2 font-josefin font-medium  rounded-md border-none outline-none bg-[#20EA6D] text-black flex justify-center items-center'>Sign Up</button>
                        </form>
                        <div className='flex justify-center items-center gap-2 my-4'>
                          <div className='w-full h-[2px] rounded-md bg-[#20EA6D]'></div>
                          <Link to={"/login"} className='text-base font-normal font-roboto '>Login</Link>
                          <div className='w-full h-[2px] rounded-md bg-[#20EA6D]'></div>
                        </div>
                    </div>
                    {/* #20EA6D */}
               </div>
            </div>
      </div>
    </div>
  )
}

