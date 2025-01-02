import React from "react";
import bg_footer from "../../assets/bg_footer.png";
import pinterest from "../../assets/pinterest.svg";
import instagram from "../../assets/instagram_icons.svg";
import youtube from "../../assets/mainyoutube.svg";
import main_facebook_icon from "../../assets/main_facebook_icon.svg";
import main_twitter_icon from "../../assets/main_twitter_icon.svg";

export const Footer = () => {
  return (
    <div className="w-full h-full relative">
      <img src={bg_footer} alt="w-full" className="w-full h-full" />
      <div className="w-full absolute top-7 py-6  text-white">
        <div className="w-mainWidth mx-auto">
          <div className="flex justify-between py-3">
            <div className="flex justify-start gap-8 uppercase">
              <div className="flex flex-col gap-4">
                <p className="text-[20px] font-roboto">Policy</p>
                <ul className="text-sm font-light flex flex-col gap-2">
                  <li>Privacy Policy</li>
                  <li>Shipping Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[20px] font-roboto">Company</p>
                <ul className="text-sm font-light flex flex-col gap-2">
                  <li>Mission</li>
                  <li>Partner Program</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start flex-col gap-3 items-end">
              <h1 className="text-[20px] font-roboto">Need help?</h1>
              <p className="text-base font-light ">Contact</p>
              <p className="text-base font-light text-right w-3/5">
                Designed to promote a tranquil night’s sleep without the use of
                artificial additives
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end gap-4 pt-1">
            <div>
              <img src={main_twitter_icon} alt="main_twitter_icon" />
            </div>
            <div>
              <img src={main_facebook_icon} alt="main_facebook_icon" />
            </div>
            <div>
              <img src={pinterest} alt="pinterest" />
            </div>
            <div>
              <img src={instagram} alt="instagram" />
            </div>
            <div>
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
