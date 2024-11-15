import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { compare_info } from "../../Data/Compare";

const Compare = () => {
  const [individual, SetIndividual] = useState(true);

  return (
    <div className="">
      {/*Bigger Screens*/}
      <div className="">
        <h1 className="">Compare features across plans</h1>
        <div className="">
          <div></div>
          <div>
            <h1>Free</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Plus</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Team</h1>
            <CustomButton content="Start now" />
          </div>
          <div>
            <h1>Enterprise</h1>
            <CustomButton content="Contact sales" />
          </div>
        </div>
        <div className="">
          <h1 className="">Features</h1>
          <div className="">
            {compare_info.map((ele, ind) => {
              return (
                <div className="">
                  <div className="">{ele.feature}</div>
                  <div className="">{ele.free}</div>
                  <div className="">{ele.plus}</div>
                  <div className="">{ele.team}</div>
                  <div className="">{ele.enterprise}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*Small screen */}
      <div className="">
        <h1 className="">Compare features across plans</h1>
        <div className="">
          <button
            className={`${individual ? " text-white" : "text-gray-500"}`}
            onClick={() => {
              SetIndividual(true);
            }}
          >
            For Individuals
          </button>
          <button
            className={`${!individual ? " text-white" : "text-gray-500"}`}
            onClick={() => {
              SetIndividual(false);
            }}
          >
            For Businesses
          </button>
        </div>
        <div className="">
          <div></div>
          <div>
            <h1>{individual ? "Free" : "Team"}</h1>
          </div>
          <div>
            <h1>{individual ? "Plus" : "Enterise"}</h1>
          </div>
        </div>
        <div className="">
          <h1 className="">Features</h1>
          <div className="">
            {compare_info.map((ele, ind) => {
              return (
                <div className="">
                  <div className="">{ele.feature}</div>
                  <div className="">{individual ? ele.free : ele.team}</div>
                  <div className="">
                    {individual ? ele.plus : ele.enterprise}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
