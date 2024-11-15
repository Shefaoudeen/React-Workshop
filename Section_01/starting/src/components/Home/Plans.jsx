import React from "react";
import { Plan_info } from "../../Data/Plan";
import CustomButton from "../CustomButton";

const Plans = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Get started with ChatGPT today</h1>
          <h1>View pricing plans</h1>
        </div>
        <div className="">
          {Plan_info.map((ele, index) => {
            return (
              <div className="" key={index}>
                <h1 className="">{ele.title}</h1>
                <div className=" ">
                  {ele.info.map((subEle, subInd) => {
                    return (
                      <div key={subInd} className="">
                        {" "}
                        <div className="">&#10003;</div>
                        <div>{subEle}</div>
                      </div>
                    );
                  })}
                </div>

                <h1 className="">
                  <span className="">${ele.price}</span> / month
                </h1>
                <CustomButton content="Start now" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
