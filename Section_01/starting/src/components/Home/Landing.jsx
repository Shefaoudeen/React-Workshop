import React from "react";
import CustomButton from "../CustomButton";

const Landing = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="">chatGPT</h1>
        <div className="">
          <h1>Get answers. Find inspiration.</h1>
          <h1>Be more productive.</h1>
        </div>
        <div className="">
          <h1>Free to use. Easy to try. Just ask and ChatGPT can</h1>
          <h1>help with writing, learning, brainstorming, and more.</h1>
        </div>
        <div className="">
          <CustomButton content="Start now" />
          <button className="">Download the app</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
