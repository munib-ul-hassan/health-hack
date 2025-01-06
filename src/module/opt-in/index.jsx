import React from "react";
import "./index.css";
export const OptIn = () => {
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
              src="https://api.leadconnectorhq.com/widget/form/Gwz36rSURLtCKbyHUSZq"
              style={{
                width: "100%",
                height: "420px",
                border: "none",
                borderRadius: "3px",
                boxShadow: "none",
                padding: "0px",
              }}
              id="inline-Gwz36rSURLtCKbyHUSZq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Organic Traffic - WA op-tin AI-bot "
              data-height="432"
              data-layout-iframe-id="inline-Gwz36rSURLtCKbyHUSZq"
              data-form-id="Gwz36rSURLtCKbyHUSZq"
              title="Organic Traffic - WA op-tin AI-bot "
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};
