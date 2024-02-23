import React from "react";
import "../Styles/welcomePageStyles.css";
import { useNavigate } from "react-router-dom";

function Welcome(props) {
  const navigate = useNavigate();
  return (
    <div className="welcomePage">
      <div className="container h-100 ">
        <div className="welcomeBody ">
          <div className="row align-items-center h-100">
            <div className="col-md-6 ">
              <div className="leftSide  px-3 py-5 rounded-1">
                <h3 className=" text-center mb-4">
                  Welcome To Quiz System Website
                </h3>
                <p className=" text-center">
                  quiz system using React.js & Redux. The quiz system will be
                  based on a set of questions provided in the attached JSON
                  file.
                </p>
                <h3 className="mt-4">Highlights:</h3>
                <ul>
                  <li>Easy to use interface</li>
                  <li>Exam builder</li>
                  <li>Multiple-choice options</li>
                </ul>
                <div className="btu text-center mt-5">
                  <button
                    className="btn btn-success  fs-3 px-5 py-2 text-white"
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block ">
              <div className="rightSisde ">
                <img src="welcome3.png" alt="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
