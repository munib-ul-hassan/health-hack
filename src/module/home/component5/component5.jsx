import arrow from "../../../assets/arrow-black.svg";
import adv_banner from "../../../assets/adv_banner.svg";
import banner_book from "../../../assets/banner_book.svg";

export const Component5 = () => {
  return (
    <div className="flex px-4 py-6 z-1 relative">
      
      <div className="w-2/5 px-14 mx-12">
        <div className="text-xl h-auto font-[Optima]">
          <h1 className="ml-4">Our Vision:</h1>
        </div>
        <div className="pl-4 mt-3 font-roboto text-[#161616CC] leading-8">
          We envision a world where people are no longer bound by the
          limitations of misinformation or the constraints of modern healthcare.
          Health Hack Hub exists to create a global movement of empowered
          individuals living optimally, sharing knowledge, and inspiring others
          to join the revolution.
        </div>
      </div>

      <div className="w-3/5 border-l-8 bg-[white] border-b-8 border-[#20EA6D] rounded-lg mt-[-7rem] ">
        <div className="flex items-center">
          <div className="border-2 rounded-lg px-8 items-center">
            <div className="px-5 ">
              <img className="w-52 mt-[-7rem] rotate-0" src={banner_book} />
            </div>
            
            <div className="w-45 px-6 text-center font-[700] justify-content">

              <h1 className="font-[optima] px-2 capitalize ">
                Gut Health: Eliminating harmful foods
              </h1>

              <h1 className="font-[optima] text-[24px]">$34.90</h1>

              <div>stars</div>
              <p className="font-[optima] mt-3 font-roboto text-[#161616CC] leading-6">
                Experience razor-sharp focus and mental clarity – empower
                yourself to accomplish more, think faster...
              </p>

              <button className="mt-4 rounded-lg flex items-center border-2 mb-8 border-[#000000] justify-center border-solid text-[black] gap-3 uppercase text-mainColor text-[Optima] py-2 px-8 rounded-lg">
                Buy Now
                <img alt="arrow" src={arrow} />
              </button>
            </div>
          </div>

          <div className="border-2 rounded-lg px-8 items-center">
            <div className="px-5">
              <img className="w-52 mt-[-7rem] rotate-0" src={adv_banner} />
            </div>
            <div className="w-45 px-6 text-center font-[700] justify-content">
              
              <h1 className="font-[optima] px-2 capitalize ">
                A comprehensive Guide to remove harmful foods
              </h1>

              <h1 className="font-[optima] text-[24px]">$34.90</h1>

              <div>stars</div>
              <p className="font-[optima] mt-3 font-roboto text-[#161616CC] leading-6">
                Experience razor-sharp focus and mental clarity – empower
                yourself to accomplish more, think faster...
              </p>

              <button className="flex mt-4 rounded-lg items-center border-2 mb-8 border-[#000000] justify-center border-solid text-[black] gap-3 uppercase text-mainColor text-[Optima] py-2 px-8 rounded-lg">
                Buy Now
                <img alt="arrow" src={arrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
