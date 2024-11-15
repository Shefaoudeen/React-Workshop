import React, { useState } from "react";
import { Video1, Video2, Video3 } from "../../assets/videos";

const EduSlides = () => {
  const [selected, setSeleted] = useState(0);
  const videoSlides = [Video1, Video2, Video3, Video2];

  return (
    <div className="">
      <h1 className="">How campuses use ChatGPT today</h1>
      <div className="">
        <button className={``} onClick={() => setSeleted(0)}>
          Students
        </button>
        <button className={``} onClick={() => setSeleted(1)}>
          Faculty
        </button>
        <button className={``} onClick={() => setSeleted(2)}>
          Research
        </button>
        <button className={``} onClick={() => setSeleted(3)}>
          Campus operation
        </button>
      </div>
      <div className="">
        <video src={videoSlides[selected]} className="" autoPlay />
      </div>
    </div>
  );
};

export default EduSlides;
