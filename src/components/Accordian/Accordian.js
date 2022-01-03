import "./Accordian.css";
import React from "react";
import SingleQuestion from "./Question";
const data = [
  {
    id: 1,
    title: "Who should take an Online Course?",
    info: "Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can Advance your skill-set or begin a career change. Take the next step in your formal education.",
  },
  {
    id: 2,
    title: "Are there prerequisites or language requirements?",
    info: "There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.All courses are conducted in English. Video lectures include English subtitles and the option to slow-down, pause, or replay lectures for better retention",
  },
  {
    id: 3,
    title: "I am a high school student, can I join?",
    info: "Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.",
  },
  {
    id: 4,
    title: "Can I take more than one course at a time?",
    info: "If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.",
  },
  {
    id: 5,
    title: "What should I do if I need to start the course late?",
    info: "It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins",
  },
];

function Accordian() {
  return (
    <div className="container-questions">
      <h3>Questions and Answers About Course</h3>
      <section className="info">
        {data.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </section>
    </div>
  );
}

export default Accordian;
