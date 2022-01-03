import React from "react";
import { Link } from "react-router-dom";
import ImageSection from "../About/ImageSection";
import Accordian from "../Accordian/Accordian";
import CourseInfo from "../CourseDetails/CourseInfo";
import Details from "../MoreDetails/Details";
import Overview from "../Overview/Overview";
import Reviews from "../Reviews/Reviews";
import "./CourseDesc.css";

export const CourseDesc = () => {
  return (
    <>
      <div>
        <ImageSection />
        <Overview />
        <CourseInfo />
        <Details />

        <Accordian />
        <Reviews />
        <Link to="/trainer_registration">
          <button className="button-style">Are You A trainer</button>
        </Link>
      </div>
    </>
  );
};
