import React, { useState } from "react";
import { FAQ_info } from "../../Data/Faq";

const Faq = () => {
  const [toggle, setToggle] = useState(null);
  const handleClick = (index) => {
    if (toggle == index) return setToggle(null);
    return setToggle(index);
  };

  return (
    <div className="">
      <h1 className="">FAQ</h1>
      <div className="">
        {FAQ_info.map((ele, ind) => {
          return (
            <div className="">
              <div onClick={() => handleClick(ind)} className="">
                <h1 className="">{ele.question}</h1>
                <h1>{toggle == ind ? "-" : "+"}</h1>
              </div>
              <div className={``}>
                <h1 className="">{ele.answer}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
