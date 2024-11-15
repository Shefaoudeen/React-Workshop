import React from "react";
import { list1 } from "../../Data/HomePageInfo";

const ListSliding = () => {
  return (
    <div className="">
      <div className="">
        {list1.map((ele, index) => {
          return (
            <div className="" key={index}>
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
      <div className="">
        {list1.map((ele, index) => {
          return (
            <div className="" key={index}>
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
      <div className="">
        {list1.map((ele, index) => {
          return (
            <div className="" key={index}>
              <h1>{ele} &#8599;</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSliding;
