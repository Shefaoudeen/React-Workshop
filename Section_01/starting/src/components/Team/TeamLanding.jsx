import React from "react";
import CustomButton from "../CustomButton";
import {
  Company1,
  Company2,
  Company3,
  Company4,
  DClogo,
} from "../../assets/Images";

const TeamLanding = () => {
  return (
    <div className="">
      <div className="">
        <h1>ChatGPT Team</h1>
        <div className="">
          <h1>An always-improving superassistant</h1>
          <h1>for every member of your team</h1>
        </div>
        <div className="">
          <h1>Generate better code, craft emails, analyze data, and </h1>
          <h1>
            supercharge any type of work in a collaborative team workspace.
          </h1>
        </div>
        <CustomButton content="Start now" />
      </div>
      <div className="">
        <div>
          <img src={Company1} alt="" className="" />
        </div>
        <div>
          <img src={Company2} alt="" className="" />
        </div>
        <div>
          <img src={Company3} alt="" className="" />
        </div>
        <div>
          <img src={Company4} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default TeamLanding;
