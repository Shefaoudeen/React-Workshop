import React from "react";
import { eduCommits } from "../../Data/EduCommits";
import CustomButton from "../CustomButton";

const EduCommitment = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="">
          Our commitment to data privacy, security, and partnership
        </h1>
        <div className="">
          {eduCommits.map((ele, index) => {
            return (
              <div className="">
                <h1 className="">{ele.title}</h1>
                <ul className="">
                  {ele.points.map((subele, subindex) => {
                    return (
                      <li className="">
                        <div>
                          <h1>✓</h1>
                        </div>
                        <div>
                          <h1>{subele}</h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="">
          <h1 className="">Bring ChatGPT Edu to your campus</h1>
          <CustomButton content="Talk with our team" />
        </div>
      </div>
    </div>
  );
};

export default EduCommitment;
