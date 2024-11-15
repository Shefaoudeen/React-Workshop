import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import { EntrepriseAccordianDetails } from "../../Data/EntrepriseAccordian";
import { teamAcc1, teamAcc2, teamAcc3 } from "../../assets/Images";

const EntreAccordian = () => {
  const AccordianPhotos = [teamAcc1, teamAcc2, teamAcc3, teamAcc1];
  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  return (
    <div className="">
      <div className="">
        <h1>A personalized AI companion</h1>
        <h1>to support work at scale</h1>
      </div>
      <div className="">
        <div className="">
          <img src={AccordianPhotos[toggle]} className="" />
        </div>
        <div className="">
          {EntrepriseAccordianDetails.map((ele, ind) => {
            return (
              <div className="">
                <div onClick={() => handleClick(ind)} className="">
                  <h1 className="">{ele.title}</h1>
                  <h1>{toggle == ind ? "-" : "+"}</h1>
                </div>
                <div className={``}>
                  <h1 className="">{ele.description}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="">
          {EntrepriseAccordianDetails.map((ele, ind) => {
            return (
              <div className="">
                <div onClick={() => handleClick(ind)} className="">
                  <h1 className="">{ele.title}</h1>
                  <h1>{toggle == ind ? "-" : "+"}</h1>
                </div>
                <div className={``}>
                  <h1 className="">{ele.description}</h1>
                  <video src={Video1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EntreAccordian;
