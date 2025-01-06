import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const RouteBar = () => {
  const location = useLocation(); // Hook to get the current URL
  const [currentUrl, setCurrentUrl] = useState([]); // State to store the URL

  useEffect(() => {
    // Update the state whenever the location changes

    setCurrentUrl(location.pathname.slice(1).split("/"));
  }, [location]); // Dependency array ensures the effect runs on location change

  return (
    <div className="bg-[#FCFCFC] ml-4 w-mainWidth">
      {currentUrl.length > 1 &&
        currentUrl.map((i, index) => {
          return (
            <>
             <span className={currentUrl[index + 1] ?"text-gray-500 ml-4":"ml-4"}>

              {i.charAt(0).toUpperCase() + i.slice(1)} 
             </span>
             <span className="ml-4">
                
              {currentUrl[index + 1] && ">"}
             </span>

            </>
          );
        })}
      {currentUrl.length == 1 && (
        <>{currentUrl[0].charAt(0).toUpperCase() + currentUrl[0].slice(1)}</>
      )}
    </div>
  );
};
