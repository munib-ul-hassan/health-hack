import book_underline_dark from "../../../assets/book_underline_dark.svg";
import ReviewsBg from "../../../assets/reviews-bg.png";
import icon1 from "../../../assets/component1-icon1.svg";
import icon2 from "../../../assets/component1-icon2.svg";
import icon3 from "../../../assets/component1-icon3.svg";
import bg from "../../../assets/component1.svg";

export const Component1 = () => {
  return (
    <div className="bg-[#E4E4E4] mx-10 rounded-lg py-2 px-12 my-10">
      <div className="mx-auto">
        <div className="">
          <h1 className="text-4xl font-medium text-center  flex justify-center items-center  py-4 font-josefin">
            Why we Created this Community{" "}
          </h1>
          <h1 className="text-SecondaryColor text-[#006633] relative  text-4xl font-medium text-center  flex justify-center items-center font-josefin">
            {" "}
            & What it Stands For
            <img
              src={book_underline_dark}
              width={"190px"}
              alt="book_underline_dark"
              className="absolute top-10"
            />
          </h1>
        </div>

        <div>
          <div className="flex justify-between gap-8 my-14 ">
            <div
              className="w-1/3 bg-no-repeat bg-[white] rounded-xl px-2"
              style={{ backgroundImage: `url(${bg})` 
              
            }}
              
              >
              <div className="flex flex-col items-center"
              >
                <div className=" w-full rounded-xl flex justify-center items-center px-4 py-10">
                  <img src={icon2} alt="topic_one_img" className="" />
                </div>{" "}
                <div className="py-3 leading-10">
                  <h3 className="text-[20px]  text-white  text-center font-optima">
                    Not Backed By Science
                  </h3>
                  <h1 className="text-[20px] text-[#20EA6D] text-center   font-optima  text-SecondaryColor">
                    <span>
                      {"->"}{"  "}
                    </span>
                    No Advice AT All
                  </h1>
                </div>
              </div>
              <p className="py-8 px-2 text-center align-text font-roboto">
              Equipping people with the tools, science, and strategies to take control of their health and live vibrantly
              </p>
            </div>
            <div
              className="w-1/3 bg-no-repeat bg-[white] rounded-xl"
              style={{ backgroundImage: `url(${bg})` 
              
            }}
              
              >
              <div className="flex flex-col items-center"
              >
                <div className=" w-full rounded-xl flex justify-center items-center px-4 py-10">
                  <img src={icon1} alt="topic_one_img" className="" />
                </div>{" "}
                <div className="py-3 leading-10">
                  <h3 className="text-[20px]  text-white  text-center font-optima">
                    A Cut-Like Community
                  </h3>
                  <h1 className="text-[20px] text-[#20EA6D] text-center   font-optima  text-SecondaryColor">
                    <span>
                      {"->"}{"  "}
                    </span>
                   Where People TRANSFORM
                  </h1>
                </div>
              </div>
              <p className="py-8 px-2 text-center align-text font-roboto">
              Not your typical health page, but a cult of people transforming to cutting edge-health
achievers
              </p>
            </div>
            <div
              className="w-1/3 bg-no-repeat bg-[white] rounded-xl"
              style={{ backgroundImage: `url(${bg})` 
              
            }}
              
              >
              <div className="flex flex-col items-center"
              >
                <div className=" w-full rounded-xl flex justify-center items-center px-4 py-10">
                  <img src={icon3} alt="topic_one_img" className="" />
                </div>{" "}
                <div className="py-3 leading-10">
                  <h3 className="text-[20px]  text-white  text-center font-optima">
                  Don't Follow The Herd
                  </h3>
                  <h1 className="text-[20px] text-[#20EA6D] text-center   font-optima  text-SecondaryColor">
                    <span>
                      {"->"}{"  "}
                    </span>
                    Instead Get Results FAST
                  </h1>
                </div>
              </div>
              <p className="py-8 px-2 text-center align-text font-roboto">
              We provide clarity, guidance, and community support to achieve results that go beyond the “normal healthy” lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
