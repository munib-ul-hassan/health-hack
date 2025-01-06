import React from "react";
import john_bg from "../../../assets/john_bg.png";
import profile_json from "../../../assets/profile_json.svg";
import john_name from "../../../assets/john_name.svg";

export const Profile = () => {
  return (
    <div className="w-full relative">
      <img src={john_bg} alt="john_bg" className="w-full h-full" />
      <div className="w-full absolute top-44 text-white">
        <div className="w-4/5 mx-auto flex justify-between items-start py-14 gap-10">
          <div className="img_section w-full flex flex-col gap-2 items-center">
            <div>
              <img src={profile_json} alt="profile_json" />
            </div>
            <div className="w-80">
              <img src={john_name} alt="john_name" />
            </div>
          </div>
          <div className="flex flex-col justify-start w-full my-4 px-10">
            <p className="!font-roboto font-light py-2">
              From Rock Bottom to Radiance
            </p>
            <h1 className="text-2xl font-medium font-josefin flex gap-2">
              {" "}
              <div className="bg-mainColor w-2 rounded-xl h-14"></div> John’s
              Journey to Great Health Through Gut Healing
            </h1>
            <p className="font-roboto font-light py-4 text-base">
              Hi, I'm John, <br /> and a few years ago, I hit rock bottom.
              Constant cravings, fluctuating energy levels, and a perpetual
              sense of guilt surrounded every meal. I tried countless diets, but
              nothing worked. Then, I discovered the importance of gut health.
              This simple change didn’t just alter my eating habits—it
              transformed my entire life
            </p>
            <div>
              <h1 className="text-2xl font-medium font-josefin flex gap-2">
                {" "}
                <div className="bg-mainColor w-2 rounded-xl h-7"></div> My
                Personal Transformation Story{" "}
              </h1>
              <div className="font-roboto font-light text-base py-8 flex flex-col gap-5">
                <p>
                  A few years ago, I was stuck in a never-ending cycle of
                  fatigue, digestive issues, and overall poor health. No matter
                  what I tried, nothing seemed to work. That’s when I stumbled
                  upon something that would change my life: the power of gut
                  health.
                </p>
                <p>
                  At first, I was skeptical—could focusing on my gut really make
                  such a difference? But I was desperate for a change, so I dove
                  in. I started by cutting out processed foods and sugars,
                  replacing them with whole foods rich in probiotics and
                  prebiotics.
                </p>
                <p>
                  The transformation was incredible. My energy levels soared, my
                  digestion improved, and I felt sharper and more focused than I
                  had in years. For the first time in a long time, I felt in
                  control of my health.
                </p>
                <p>
                  Seeing how much better I felt, I knew I had to share my story.
                  I began helping others discover the benefits of gut health,
                  and watching them transform their lives too has been
                  incredibly rewarding.
                </p>
                <p>
                  Looking back, I can’t believe how much has changed—all because
                  I took the leap and started healing my gut. If you’re
                  struggling like I was, take it from me: your gut health is the
                  key to turning things around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
