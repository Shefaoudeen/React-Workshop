import React from "react";
import { Photo1, Photo2, Photo3 } from "../../assets/Images";
import { HomeInfoDetails } from "../../Data/HomeInfo";

const Info = () => {
  return (
    <div className="">
      {HomeInfoDetails.map((ele, ind) => {
        return (
          <section className="">
            <div className="">
              <h1>{ele.line1}</h1>
              <h1>{ele.line2}</h1>
            </div>
            <img src={ele.image} className="" />
            <img src={ele.mobileImage} className="" />
          </section>
        );
      })}
    </div>
  );
};

export default Info;
