import React from "react";
import "./index.css";

export const ProductsCommunity = () => {
  return (
    <div className="w-full my-4 h-full">
      <div className="w-[450px] mx-auto bg-white rounded-2xl pb-[2px]">
        <div className="py-14">
          <div className="w-3/4 mx-auto form_opt">
            <div>
              <h4 className="text-2xl font-semibold py-2 text-center">
                Products The <span className="text-[#20EA6D]">Community Supports</span>
              </h4>
            </div>

         
            <a
              href="https://www.canva.com/design/DAGamIHFWYI/kuhye5TYjQLBd8DkwneWiw/view?utm_content=DAGamIHFWYI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "315px", // Explicit height set for the iframe container
            
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0, // Ensure iframe padding is 0
                    margin: 0, // Ensure iframe margin is 0
                  }}
                  src="https://www.canva.com/design/DAGamIHFWYI/kuhye5TYjQLBd8DkwneWiw/view?embed"
                  allowFullScreen
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};