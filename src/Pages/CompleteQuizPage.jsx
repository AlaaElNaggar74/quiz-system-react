import React from "react";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import {
  resetScore,
  resetWrongQuestion,
} from "../store/actions/info/actionInfoMethod";

import "../Styles/completeQuizPageStyles.css"
function CompleteQuizPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="complete">
      <div className="completeBox">
        <div className="circleTrue d-flex justify-content-center align-items-center mx-auto">
          <div className="childCircle d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-check fw-bolder"></i>
          </div>
        </div>
        <h4 className="mt-3 text-center">Your application was Submited</h4>
        <div className="homeBtnGro d-flex  justify-content-evenly  mt-5">
          <div
            className="btn btn-primary fs-3"
            onClick={() => {
              props.setQuestionIndex(0);
              dispatch(resetScore());
              dispatch(resetWrongQuestion([]));
            }}
          >
            Try Again
          </div>
          <div
            className="btn btn-info fs-3 text-white "
            onClick={() => {
              navigate("/statistics");
            }}
          >
            Review
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteQuizPage;
