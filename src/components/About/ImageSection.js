import React from "react";
import "./ImageSection.css";
const ImageSection = () => {
  return (
    <div className="image--section">
      <div className="img">
        <img
          src="http://www.pngmagic.com/product_images/blue-background-vector.jpg"
          alt=""
        />
      </div>
      <div className="about--info">
        <h4>
          Welcome to <span>the Course</span>
        </h4>
        <p className="about--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
        <div className="about--details">
          <div className="left--section">
            <p>Duration</p>
            <p>Level</p>
            <p>20 hrs</p>
            <p>Available Batches</p>
          </div>
          <div className="right--section">
            <p>: 5 Feb - 12 March</p>
            <p>: Intermediate Level</p>
            <p>: 30 Lessons</p>
            <p>: 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
