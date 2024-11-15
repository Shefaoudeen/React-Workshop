import React from "react";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";

const EntreCardSlides = () => {
  return (
    <div className="">
      <h1 className="">Join us at the AI frontier</h1>
      <div className="">
        <button>L</button>
        <button>R</button>
      </div>
      <div className="">
        {TeamSlideDetails.map((ele, ind) => {
          return (
            <div className="">
              <img src={ele.image} className={``}></img>
              <h1 className="">{ele.title}</h1>
              <h1 className="">{ele.description}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntreCardSlides;
