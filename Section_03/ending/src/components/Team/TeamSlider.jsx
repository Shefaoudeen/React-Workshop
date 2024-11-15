import React from "react";
import CustomButton from "../CustomButton";
import { TeamSlideDetails } from "../../Data/TeamSlideDetails";
import { Sli1 } from "../../assets/Images";

const TeamSlider = () => {
  return (
    <div className="">
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
      <div className="">
        <h1 className="">Join thousands of teams redefining</h1>
        <h1 className="">how they work with ChatGPT</h1>
        <CustomButton content="Start now" />
      </div>
    </div>
  );
};

export default TeamSlider;
