import React from "react";
import "./Overview.css";
import {UnderLine} from "../CourseBanner/underline"

const Overview = () => {
  return (
    <>
      <div className="Overview-main">
        <div className="overview-container">
          <div className="header">
            <h1>Learning<UnderLine backgroundColor="red"/></h1>
          </div>
          <div className="Overview-content">
            The students will have a thorough understanding of concepts and
            their applicability in the GMAT- Verbal questions ranging from easy
            to extremely hard difficulty level. So instead of relying upon the
            look, sound, or feel of any question, you will have solid reasoning
            to back your response.! A thorough understanding of grammar is
            developed that will help you in sentence correction.! The students
            will master advanced concepts such as Redundancy, Rhetoric,
            Parallelism, and Modifiers.! Towards the end of the course, students
            will be able to tackle all the types of questions in reading
            comprehension and Critical Reasoning.! At the end of the course, you
            will be equipped with test-taking strategies in order to crack the
            GMAT with a 700+ score.!
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
