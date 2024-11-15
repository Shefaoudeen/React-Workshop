import React from "react";
import { eduCommits } from "../../Data/EduCommits";

const EntreCards = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1>Enterprise-level privacy, security,</h1>
          <h1>and OpenAI partnership</h1>
        </div>
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
    </div>
  );
};

export default EntreCards;
