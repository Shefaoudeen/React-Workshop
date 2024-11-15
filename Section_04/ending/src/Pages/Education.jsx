import React from "react";
import EduHome from "../components/Education/EduHome";
import BuiltEdu from "../components/Education/BuiltEdu";
import EduCommitment from "../components/Education/EduCommitment";
import EduSlides from "../components/Education/EduSlides";

const Education = () => {
  return (
    <div className="">
      <EduHome />
      <BuiltEdu />
      <EduSlides />
      <EduCommitment />
    </div>
  );
};

export default Education;
