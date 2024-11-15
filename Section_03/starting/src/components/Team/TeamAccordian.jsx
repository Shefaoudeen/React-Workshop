import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import { TeamAccordianDetails } from "../../Data/TeamAccordian";
import { teamAcc1, teamAcc2, teamAcc3 } from "../../assets/Images";

const TeamAccordian = () => {
  const AccordianPhotos = [teamAcc1, teamAcc2, teamAcc3, teamAcc1];

  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  return (
    <div className="">
      <div>
        <h1 className="">ChatGPT that’s built for work</h1>
      </div>
      <div className="">
        <div className="">
          <img src={AccordianPhotos[toggle]} className="" />
        </div>
        <div className="">
          <div>
            {TeamAccordianDetails.map((ele, ind) => {
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
      </div>
      <div className="">
        <div className="">
          <div>
            {TeamAccordianDetails.map((ele, ind) => {
              return (
                <div className="">
                  <div onClick={() => handleClick(ind)} className="">
                    <h1 className="">{ele.title}</h1>
                    <h1>{toggle == ind ? "-" : "+"}</h1>
                  </div>
                  <div className={``}>
                    <h1 className="">{ele.description}</h1>
                    <video src={Video1}></video>
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

export default TeamAccordian;
