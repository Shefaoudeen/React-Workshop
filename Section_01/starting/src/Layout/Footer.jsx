import React from "react";
import { DC_footer, Footer_details } from "../Data/FooterInfo";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        {Footer_details.map((ele, index) => {
          return (
            <div key={index} className="">
              <h1 className="">{ele.heading}</h1>
              <div className="">
                {ele.links.map((subele, subindex) => {
                  return <h1 key={subindex}>{subele}</h1>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <div className="">
          <h1 className="">DC 24</h1>
        </div>
        <div>
          <h1 className="">React & Beyond Workshop</h1>
        </div>
        <div className="">
          {DC_footer.map((ele, index) => {
            return (
              <div key={index}>
                <a href={ele.link} target="_blank">
                  <img src={ele.icon} className="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
