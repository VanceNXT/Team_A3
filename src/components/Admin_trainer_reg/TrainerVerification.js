import React from "react";
import "./TrainerVerification.css";

const TrainerVerification = () => {
  return (
    <div className="tv_container">
      <div className="side-text">A GOOD TRAINER CAN CREATE A BETTER WORLD!</div>
      <div className="form-container">
        <div className="title">TRAINER VERIFICATION</div>
        <form>
          <div id="page-1">
            <div className="duo-field">
              <div>
                <div>First Name</div>
                <input type="text" />
              </div>
              <div>
                <div>Last Name</div>
                <input type="text" />
              </div>
            </div>
            <div className="uni-field">
              <div>
                <div>Email-Id</div>
                <input type="text" />
              </div>
            </div>
            <div className="uni-field">
              <div>
                <div>Trainer Qualification</div>

                <input type="text" />
              </div>
            </div>
            <div className="uni-field">
              <div>
                <div>Course of Training</div>
                <input type="text" />
              </div>
            </div>
            <div className="uni-field">
              <div>
                <div>Contact Number</div>
                <input type="text" />
              </div>
            </div>
            <div className="tv-next-button">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("page-1").style.marginLeft = "-100%";
                }}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TrainerVerification;
