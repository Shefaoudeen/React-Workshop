import React from "react";
import CustomButton from "../CustomButton";
import { DClogo, Uni1, Uni2, Uni3, Uni4 } from "../../assets/Images";

const EduHome = () => {
  return (
    <div className="">
      <div className="">
        <h1>ChatGPT Edu</h1>
        <h1 className="">Bring AI to campus at scale</h1>
        <div className="">
          <h1>An accessible option for university to deploy AI to </h1>
          <h1>students, faculty, researchers, and campus operations.</h1>
        </div>
        <CustomButton content="Talk with our team" />
      </div>
      <div className="">
        <div className="">
          <div>
            <img src={Uni1} alt="" className="" />
          </div>
          <div>
            <img src={Uni2} alt="" className="" />
          </div>
          <div>
            <img src={Uni3} alt="" className="" />
          </div>
          <div>
            <img src={Uni4} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduHome;
