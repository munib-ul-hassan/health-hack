import React from "react";
import "./index.css";



export const PoptIn = () => {
  return (
    <div className="w-full my-4 h-full">
      <div className="w-[400px] mx-auto bg-white rounded-2xl pb-[2px]">
        <div className="py-14">
          <div className="w-3/4 mx-auto form_opt">
            <h1 className="text-center text-base text-[#161616]">
              Free Quick Start Guide
            </h1>
            <div>
              <h4 className="text-3xl font-semibold py-2">
                "7 <span className="text-[#20EA6D]"> Everyday </span> Foods That
                Sabotage <span className="text-[#20EA6D]"> Your Health</span>"
              </h4>
            </div>
            {/* iframe */}

            
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/NxMa4ps6yr3kXKCjg6Eg"
                
                style={{
                width: "100%",
                height: "420px",
                border: "none",
                borderRadius: "3px",
                boxShadow: "none",
                padding: "0px",
              }}
              id="inline-NxMa4ps6yr3kXKCjg6Eg" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="PAID - WA op-tin AI-bot - (0 spacing) "
              data-height="402"
              data-layout-iframe-id="inline-NxMa4ps6yr3kXKCjg6Eg"
              data-form-id="NxMa4ps6yr3kXKCjg6Eg"
              title="PAID - WA op-tin AI-bot - (0 spacing) "
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script> 
          </div>
        
        </div>
      </div>
   
    </div>
  );

};
