import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full my-4 h-full">
      <div className="w-[400px] mx-auto bg-white rounded-2xl pb-[2px]">
        <div className="py-8">
          <div className="w-4/5 mx-auto form_opt">
            <h1 className="text-center text-base text-[#161616]">
              Feel Better, Look better, <br /> Perform better
            </h1>
            <div>
              <h4 className="text-3xl font-semibold py-2">
                "The <span className="text-[#20EA6D]"> Health BluePrint </span>
                Successful{" "}
                <span className="text-[#20EA6D]"> People Swear by</span>,
                Delivered Weekly"
              </h4>
            </div>
            {/* iframe */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/f9yCXbzm0ER0YrIodL3D"
              style={{
                width: "100%",
                height: "450px",
                border: "none",
                borderRadius: "3px",
                boxShadow: "none",
                padding: "0px",
              }}
              id="inline-f9yCXbzm0ER0YrIodL3D"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Organic Traffic - WA + E-MAIL (newsletter op-tin)"
              data-height="432"
              data-layout-iframe-id="inline-f9yCXbzm0ER0YrIodL3D"
              data-form-id="f9yCXbzm0ER0YrIodL3D"
              title="Organic Traffic - WA + E-MAIL (newsletter op-tin)"
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};
