import React from 'react';

export const TopHeader = () => {
  return (
    <div className='w-full bg-[#161616] py-2'>
      <div className='flex justify-between items-center  text-white  font-josefin text-sm w-mainWidth mx-auto'>
        <div className='w-full'>
          <p className=''>10% Discounts on Last year sale !!!</p>
          </div>
          <div className='flex justify-end items-end w-4/12'>
            <div className='w-full border-r-[1px] border-[#FFFFFF4D] border-solid  flex justify-center items-center'>24/7 Support</div>
            <div className='w-full border-r-[1px] border-[#FFFFFF4D] border-solid  flex  justify-center items-center'>About Us</div>
            <div className='w-full flex  justify-center items-center'>Login / Register</div>
          </div>
      </div>
    </div>
  )
};

