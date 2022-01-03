import React from "react";
import "./banner.css";

const Banner = () => {
  const course = {
    name: "Artificial Intelligence and its application",
    description:
      "12 month online or weekend classroom course in AI & ML. Learn from world-class faculty. Hand-on learning with Industry relevant syllabus. Work on 13+ projects & Capstone Project. 8k+ career transformation. 500+ Hiring Partners. Work on Capstone Project.",
    topics: "Deep Learning, Image Processing, AI(Basics)",
    logo: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    trainer: "john doe",
    designation: "AI Developer",
    duration: "10/03/2022 - 12/03/2022",
    timing: "10.00am - 12.00am",
    hours: 4,
    level: "Intermediate",
  };
  return (
    <div>
      <div className="description">
        <div className="bck-dim"></div>
        <div className="course-banner">
          <div>
            <div className="course-img"></div>
            <div>
              <button
                className="defaultButton"
                style={{ backgroundColor: "#01c011", marginTop: "20px" }}
              >
                Enroll Now
              </button>
            </div>
          </div>
          <div className="course-details">
            <div className="course-name">{course.name}</div>
            <p className="des">{course.description}</p>
            <div className="topics">Topics : {course.topics}</div>
            <div className="tr-det">
              <div
                style={{ backgroundImage: `url(${course.logo})` }}
                className="trainer-logo"
              ></div>
              <h4>{course.trainer}</h4>
              <div className="designation">{course.designation}</div>
            </div>
            <div className="duration-details">
              <div>Duration : {course.duration}</div>
              <div>Total hours : {course.hours}hrs</div>
            </div>
            <div className="duration-details">
              <div>Timing : {course.timing}</div>
              <div style={{ marginLeft: "35px" }}>Level : {course.level}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
