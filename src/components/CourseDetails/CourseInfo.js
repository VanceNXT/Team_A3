import React from "react";
import "./CourseInfo.css";

const CourseInfo = () => {
  // const [details, setDetails] = useState({
  //   topics: ["AI", "MachineLearning", "DeepLearning"],
  //   duration: "10/03/2022 - 12/03/2022",
  //   timing: "10.00am - 12.00am",
  //   hours: 4,
  //   level: "Intermediate",
  //   benefits: [
  //     "Automation",
  //     "Productivity",
  //     "Decision Making",
  //     "Solving Complex Problems",
  //     "Economy",
  //     "Managing Repetitive Tasks",
  //     "Personalization",
  //     "Global Defense",
  //     "Disaster Management",
  //     "Lifestyle",
  //   ],
  // });

  const details = {
    topics: ["AI", "MachineLearning", "DeepLearning"],
    duration: "10/03/2022 - 12/03/2022",
    timing: "10.00am - 12.00am",
    hours: 4,
    level: "Intermediate",
    benefits: [
      "Automation",
      "Productivity",
      "Decision Making",
      "Solving Complex Problems",
      "Economy",
      "Managing Repetitive Tasks",
      "Personalization",
      "Global Defense",
      "Disaster Management",
      "Lifestyle",
    ],
  };
  return (
    <div className="maincontainer-info">
      <h1>More About Course</h1>
      <div className="container-courseInfo">
        <div className="item-courseInfo">
          <h2>Course Info</h2>
          <div style={{ padding: "0px 20px" }}>
            <div className="topics-info">
              <h3>Topics to be covered</h3>
              <ol>
                {details.topics.map((ele) => (
                  <li>{ele}</li>
                ))}
              </ol>
            </div>
            <div className="topics-info">
              <h3>Course Description</h3>
              <ul>
                <li>
                  12 month online or weekend classroom course in AI & ML. Learn
                  from world-class faculty. Hand-on learning with Industry
                  relevant syllabus. Work on 13+ projects & Capstone Project.
                  8k+ career transformation. 500+ Hiring Partners. Work on
                  Capstone Project.
                </li>
              </ul>
            </div>

            <div className="topics-info">
              <h3>Prerequisite</h3>
              <ul>
                <li>
                  {" "}
                  Grade of C- or above in CSCI 311 (Algorithms & Data
                  Structures) Recommend: Grade of C- or above in Discrete Math
                  and Sr. standing; Grade C- or above in MATH 314.
                </li>
              </ul>
            </div>
            <div className="course-time">
              Duration: <div>{details.duration}</div>
            </div>
            <div className="course-time">
              Timig: <div>{details.timing}</div>
            </div>
            <div className="course-time">
              Total hours: <div>{details.hours} hrs</div>
            </div>
          </div>
        </div>
        <div className="item-courseInfo">
          <h2> Course Benefits</h2>
          <div style={{ padding: "0px 20px" }}>
            <div className="topics-info">
              <h3>Course Objectives</h3>
              <ul>
                <li>
                  The primary objective of this course is to introduce the basic
                  principles, techniques, and applications of Artificial
                  Intelligence. Emphasis will be placed on the teaching of these
                  fundamentals, not on providing a mastery of specific software
                  tools or programming environments. Assigned projects promote a
                  ‘hands-on’ approach for understanding, as well as a
                  challenging avenue for exploration and creativity.
                </li>
              </ul>
            </div>
            <div style={{ fontFamily: "poppins" }}>
              Major benefits of the course are,
            </div>
            <ul>
              {details.benefits.map((ele) => (
                <li>{ele}</li>
              ))}
            </ul>
            {/* <p>Intermediate</p>
          <p>2 Hrs : 12 Lessons</p>
          <p>English</p>
          <p>Interactive Live Learning</p>
          <p>Certificate of Completion</p>
          <p>Full Life time access to materials</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
