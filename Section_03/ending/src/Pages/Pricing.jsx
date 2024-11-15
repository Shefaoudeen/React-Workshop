import React from "react";
import Plans from "../components/Home/Plans";
import Compare from "../components/Pricing/Compare";
import Faq from "../components/Pricing/Faq";

const Pricing = () => {
  return (
    <div className="">
      <h1 className="">Pricing</h1>
      <Plans />
      <Compare />
      <Faq />
    </div>
  );
};

export default Pricing;
