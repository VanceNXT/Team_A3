import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

export const Registration = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    qualification: "",
    course: "",
    contact: "",
    startdate: "",
    enddate: "",
    starttime: "",
    endtime: "",
    hours: "",
    goals: "",
    objectives: [],
    topics: [],
    prerequisites: [],
    terms: [],
  });

  const validatepage1 = (e) => {
    e.preventDefault();
    if (
      !document
        .getElementById("email")
        .value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    ) {
      alert("Enter valid email Address");
      return 0;
    }
    if (!document.getElementById("contact").value.match(/^\d{10,10}$/)) {
      alert("Enter valid Contact Number");
      return 0;
    }
    if (
      details.firstname &&
      details.lastname &&
      details.email &&
      details.qualification &&
      details.course &&
      details.contact
    ) {
      document.getElementById("page-1").style.marginLeft = "-100%";
    }
  };

  const validatepage2 = (e) => {
    e.preventDefault();
    if (
      details.startdate &&
      details.enddate &&
      details.starttime &&
      details.endtime &&
      details.hours &&
      details.goals &&
      details.objectives.length > 0
    ) {
      document.getElementById("page-1").style.marginLeft = "-200%";
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        details.topics.length > 0 &&
        details.prerequisites.length > 0 &&
        details.terms.length > 0
      )
    ) {
      return 1;
    }
    alert("Registration Successfull");
    console.log("Registration Details-->", details);
    setDetails({
      firstname: "",
      lastname: "",
      email: "",
      qualification: "",
      course: "",
      contact: "",
      startdate: "",
      enddate: "",
      starttime: "",
      endtime: "",
      hours: "",
      goals: "",
      objectives: [],
      topics: [],
      prerequisites: [],
      terms: [],
    });
  };
  return (
    <>
      {console.log(details)}
      <div className="container">
        <Link to="/" style={{ marginBottom: "20px" }}>
          <button className="button-style">Back To Courses</button>
        </Link>
        <div className="register-panel">
          <div className="side-image"></div>
          <div className="register-form-panel">
            <div className="register-wrapper">
              <h3>Trainer Registration</h3>
              <form className="register-form" onSubmit={(e) => formSubmit(e)}>
                {/* page1 */}
                <div id="page-1">
                  <div className="duo-field">
                    <div>
                      <div>First Name</div>
                      <input
                        type="text"
                        name="firstname"
                        value={details.firstname}
                        onChange={(e) =>
                          setDetails({ ...details, firstname: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <div>Last Name</div>
                      <input
                        type="text"
                        name="lastname"
                        value={details.lastname}
                        onChange={(e) =>
                          setDetails({ ...details, lastname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="uni-field">
                    <div>
                      <div>Email-Id</div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={(e) => {
                          setDetails({ ...details, email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="uni-field">
                    <div>
                      <div>Trainer Qualification</div>
                      <input
                        type="text"
                        name="qualification"
                        value={details.qualification}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            qualification: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="uni-field">
                    <div>
                      <div>Course of Training</div>
                      <input
                        type="text"
                        name="course"
                        value={details.course}
                        onChange={(e) =>
                          setDetails({ ...details, course: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="uni-field">
                    <div>
                      <div>Contact Number</div>
                      <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={details.contact}
                        onChange={(e) =>
                          e.target.value.match(/^\d{0,10}$/) &&
                          setDetails({ ...details, contact: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="next-button">
                    <button type="button" onClick={(e) => validatepage1(e)}>
                      Next
                    </button>
                  </div>
                </div>

                {/* page2 */}
                <div id="page-2">
                  <div className="duo-field">
                    <div>
                      <div>Start Date</div>
                      <input
                        type="date"
                        onChange={(e) => {
                          const date = new Date(e.target.value);
                          setDetails({
                            ...details,
                            startdate:
                              date.getDate() +
                              "/" +
                              (date.getMonth() + 1) +
                              "/" +
                              date.getFullYear(),
                          });
                        }}
                      />
                    </div>

                    <div>
                      <div>End Date</div>
                      <input
                        type="date"
                        onChange={(e) => {
                          const date = new Date(e.target.value);
                          setDetails({
                            ...details,
                            enddate:
                              date.getDate() +
                              "/" +
                              (date.getMonth() + 1) +
                              "/" +
                              date.getFullYear(),
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="duo-field">
                    <div
                      className="duo-field"
                      style={{ margin: "0px", gridColumnGap: "20px" }}
                    >
                      <div>
                        <div>Start Time</div>
                        <div style={{ display: "flex" }}>
                          <input
                            type="number"
                            id="starttime"
                            value={parseInt(details.starttime.split(" ")[0])}
                            style={{
                              borderRadius: "5px 0px 0px 5px",
                              padding: "2px 0px",
                              textAlign: "center",
                            }}
                            onChange={(e) => {
                              if (
                                e.target.value.match(/^\d{0,2}$/) &&
                                e.target.value <= 12 &&
                                (e.target.value === "" || e.target.value !== 0)
                              ) {
                                setDetails({
                                  ...details,
                                  starttime:
                                    e.target.value +
                                    " " +
                                    document.getElementById("starttimeselect")
                                      .value,
                                });
                              }
                            }}
                          />
                          <select
                            id="starttimeselect"
                            onChange={(e) => {
                              setDetails({
                                ...details,
                                starttime:
                                  document.getElementById("starttime").value +
                                  " " +
                                  document.getElementById("starttimeselect")
                                    .value,
                              });
                            }}
                          >
                            <option value="a.m">a.m</option>
                            <option value="p.m">p.m</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div>End Time</div>
                        <div style={{ display: "flex" }}>
                          <input
                            type="number"
                            id="endtime"
                            value={parseInt(details.endtime.split(" ")[0])}
                            style={{
                              borderRadius: "5px 0px 0px 5px",
                              padding: "2px 0px",
                              textAlign: "center",
                            }}
                            onChange={(e) => {
                              if (
                                e.target.value.match(/^\d{0,2}$/) &&
                                e.target.value <= 12 &&
                                (e.target.value === "" || e.target.value !== 0)
                              ) {
                                setDetails({
                                  ...details,
                                  endtime:
                                    e.target.value +
                                    " " +
                                    document.getElementById("starttimeselect")
                                      .value,
                                });
                              }
                            }}
                          />
                          <select
                            id="endtimeselect"
                            onChange={(e) => {
                              setDetails({
                                ...details,
                                endtime:
                                  document.getElementById("endtime").value +
                                  " " +
                                  document.getElementById("endtimeselect")
                                    .value,
                              });
                            }}
                          >
                            <option value="a.m">a.m</option>
                            <option value={"p.m"}>p.m</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>Total Hours</div>
                      <input
                        type="number"
                        value={details.hours}
                        onChange={(e) => {
                          if (e.target.value.match(/^\d{0,3}$/)) {
                            setDetails({ ...details, hours: e.target.value });
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-field">
                    <div>Goals</div>
                    <textarea
                      name="goals"
                      value={details.goals}
                      onChange={(e) =>
                        setDetails({ ...details, goals: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {/* Objectives field */}
                  <div className="flex-field">
                    <div>Objectives</div>
                    <div className="list-div">
                      <ol id="objectives">
                        {details.objectives.map((ob) => (
                          <li>{ob}</li>
                        ))}
                      </ol>
                      <div className="input-div" id="ob-input-div">
                        <input type="text" id="ob-input" />
                        <button
                          type="button"
                          onClick={(e) => {
                            if (
                              document.getElementById("ob-input").value !== ""
                            ) {
                              let temp = [
                                ...details.objectives,
                                document.getElementById("ob-input").value,
                              ];
                              setDetails({ ...details, objectives: temp });
                            }
                            document.getElementById(
                              "ob-input-div"
                            ).style.display = "none";
                            document.getElementById("ob-add").style.display =
                              "flex";
                          }}
                        >
                          Add
                        </button>
                      </div>
                      <div
                        className="add"
                        id="ob-add"
                        onClick={(e) => {
                          document.getElementById(
                            "ob-input-div"
                          ).style.display = "flex";
                          e.target.style.display = "none";
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="pg-2-next-button">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("page-1").style.marginLeft =
                          "0%";
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        validatepage2(e);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* page3 */}
                <div id="page-3">
                  {/* Topics field */}
                  <div className="flex-field">
                    <div>Topics to cover</div>
                    <div className="list-div">
                      <ol id="topics">
                        {details.topics.map((ob) => (
                          <li>{ob}</li>
                        ))}
                      </ol>
                      <div className="input-div" id="tp-input-div">
                        <input type="text" id="tp-input" />
                        <button
                          type="button"
                          onClick={(e) => {
                            if (
                              document.getElementById("tp-input").value !== ""
                            ) {
                              let temp = [
                                ...details.topics,
                                document.getElementById("tp-input").value,
                              ];
                              setDetails({ ...details, topics: temp });
                            }
                            document.getElementById(
                              "tp-input-div"
                            ).style.display = "none";
                            document.getElementById("tp-add").style.display =
                              "flex";
                          }}
                        >
                          Add
                        </button>
                      </div>
                      <div
                        className="add"
                        id="tp-add"
                        onClick={(e) => {
                          document.getElementById(
                            "tp-input-div"
                          ).style.display = "flex";
                          e.target.style.display = "none";
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>

                  {/* Pre-requisites field */}
                  <div className="flex-field">
                    <div>Pre-requisites</div>
                    <div className="list-div">
                      <ol id="requisites">
                        {details.prerequisites.map((ob) => (
                          <li>{ob}</li>
                        ))}
                      </ol>
                      <div className="input-div" id="pr-input-div">
                        <input type="text" id="pr-input" />
                        <button
                          type="button"
                          onClick={(e) => {
                            if (
                              document.getElementById("pr-input").value !== ""
                            ) {
                              let temp = [
                                ...details.prerequisites,
                                document.getElementById("pr-input").value,
                              ];
                              setDetails({ ...details, prerequisites: temp });
                            }
                            document.getElementById(
                              "pr-input-div"
                            ).style.display = "none";
                            document.getElementById("pr-add").style.display =
                              "flex";
                          }}
                        >
                          Add
                        </button>
                      </div>
                      <div
                        className="add"
                        id="pr-add"
                        onClick={(e) => {
                          document.getElementById(
                            "pr-input-div"
                          ).style.display = "flex";
                          e.target.style.display = "none";
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>

                  {/* Terms and condition field */}
                  <div className="flex-field">
                    <div>Terms & Conditions</div>
                    <div className="list-div">
                      <ol id="terms">
                        {details.terms.map((ob) => (
                          <li>{ob}</li>
                        ))}
                      </ol>
                      <div className="input-div" id="tm-input-div">
                        <input type="text" id="tm-input" />
                        <button
                          type="button"
                          onClick={(e) => {
                            if (
                              document.getElementById("tm-input").value !== ""
                            ) {
                              let temp = [
                                ...details.terms,
                                document.getElementById("tm-input").value,
                              ];
                              setDetails({ ...details, terms: temp });
                            }
                            document.getElementById(
                              "tm-input-div"
                            ).style.display = "none";
                            document.getElementById("tm-add").style.display =
                              "flex";
                          }}
                        >
                          Add
                        </button>
                      </div>
                      <div
                        className="add"
                        id="tm-add"
                        onClick={(e) => {
                          document.getElementById(
                            "tm-input-div"
                          ).style.display = "flex";
                          e.target.style.display = "none";
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", marginTop: "30px" }}>
                    <div style={{ marginRight: "15px" }}>Additional Files</div>
                    <input type="file" />
                  </div>
                  <div className="pg-2-next-button">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("page-1").style.marginLeft =
                          "-100%";
                      }}
                    >
                      Back
                    </button>
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
