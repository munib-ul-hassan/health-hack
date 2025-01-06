import bg from "../../../assets/component2.svg";
import HealthHackHub from "../../../assets/HealthHacklogo.svg";
import arrow from "../../../assets/arrow.svg";

export const Component2 = () => {
  return (
    <div
      className="w-mainwidth  py-10  my-10 px-[13rem] border-b-2 border-mainColor"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto">
        <div className="flex justify-center items-center">
          <img
            src={HealthHackHub}
            width={"100px"}
            height={"40px"}
            alt="book_underline_dark"
          />{" "}
        </div>
      </div>
     
      <div className="text-center mx-10">
        <p className="py-8 text-center align-text text-[Optima] text-[white] text-[25px]">
          In a world overwhelmed by misinformation and outdated health
          standards, we provide clarity, guidance, and community support to
          achieve results that go beyond the “normal healthy” lifestyle.
        </p>
      </div>
      <div>
        <div className="text-center mx-10 flex items-center justify-center ">
        
      <button className="border-mainColor flex items-center justify-center border-2 border-solid gap-3 uppercase text-mainColor text-[Optima] py-2 px-8 rounded-lg">
               
                JOIN NOW 
                
                  <img
                alt="arrow"   
                   src={arrow}
                   />
                
              </button>
        </div>
      </div>
    </div>
  );
};
