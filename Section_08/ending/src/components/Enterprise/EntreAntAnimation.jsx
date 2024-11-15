import React, { useState } from "react";
import { Video1 } from "../../assets/videos";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
} from "../../assets/Images";

const EntreAntAnimation = () => {
  const cards = [card1, card2, card3, card4, card5, card6, card7];
  const [selected, Setselected] = useState(0);

  return (
    <div className="">
      <div className="">
        <h1> Customize ChatGPT to any workflow</h1>
        <h1>and collaborate across teams</h1>
      </div>
      <div className="">
        <button className={``} onClick={() => Setselected(0)}>
          Engineering
        </button>
        <button className={``} onClick={() => Setselected(1)}>
          Marketing
        </button>
        <button className={``} onClick={() => Setselected(2)}>
          Sales & success
        </button>
        <button className={``} onClick={() => Setselected(3)}>
          Finance & accounting
        </button>
        <button className={``} onClick={() => Setselected(4)}>
          IT
        </button>
        <button className={``} onClick={() => Setselected(5)}>
          Operation
        </button>
        <button className={``} onClick={() => Setselected(6)}>
          HR & recruiting
        </button>
      </div>
      {/*
      Don't Repeat Yourself method
      <div className="flex gap-5">
        {data.map((ele,ind)=>{
          return         
          <button
          className={``}
          onClick={() => Setselected(ind)}
        >
          {ele}
        </button>
        })}
      </div>
       */}
      <div className="">
        <img className="" src={cards[selected]} />
      </div>
    </div>
  );
};

export default EntreAntAnimation;
