import React from "react";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";

const EntreSlides = () => {
  return (
    <div className="">
      <h1 className="">A new way of working</h1>
      <h1 className="">
        92% of the Fortune 500 already use OpenAI in their business
      </h1>
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

export default EntreSlides;
