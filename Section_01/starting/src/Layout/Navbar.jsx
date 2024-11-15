import React from "react";
import { Navbar_details } from "../Data/NavbarInfo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="">
      <div className="">ChatGPT | </div>
      <div className=""></div>
      <div className="">
        <div className="">
          {Navbar_details.map((ele, index) => {
            return (
              <div key={index} className="">
                <Link to={ele.Link}>
                  <h1 className={``}>{ele.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
