import React from "react";
import { Video1 } from "../../assets/videos";
import { features_info } from "../../Data/Features";

const VideoCards = () => {
  return (
    <div className="">
      <h1 className="">Explore more features in ChatGPT</h1>
      <div className="">
        {features_info.map((ele, index) => {
          return (
            <div className="" key={index}>
              <div className="">
                <h1 className="">{ele.title}</h1>
                <p className="">{ele.description}</p>
              </div>
              <div className="">
                <video
                  loop={true}
                  autoPlay={true}
                  src={ele.videoClip}
                  className=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCards;
