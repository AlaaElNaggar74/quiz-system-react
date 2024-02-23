import React from "react";
import "../Styles/statisticStyles.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  resetScore,
  resetWrongQuestion,
} from "../store/actions/info/actionInfoMethod";
import StaticBox from "../Components/StaticBox";
import QuestionBox from "../Components/QuestionBox";

function Statistics(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateInfo = useSelector((state) => state.info);
  console.log("stateInfo-stateInfo", stateInfo);
  const rightQuestion =
    stateInfo.totalQuestion - stateInfo.wrongQuestion.length;
  return (
    <div className="statistics">
      <div className="container">
        <h1 className="text-center py-4"> The Statistics Page </h1>
        <div className="details">
          <div className="row">
            <div className="col-md-6">
              <StaticBox
                title="Total Question"
                info={stateInfo.totalQuestion}
                icon="fa-list"
              />
            </div>
            <div className="col-md-6">
              <StaticBox
                title="The Correct"
                info={rightQuestion}
                icon="fa-check"
              />
            </div>

            <div className="col-md-6">
              <StaticBox
                title="The Wrong"
                info={stateInfo.wrongQuestion.length}
                icon="fa-circle-xmark"
              />
            </div>

            <div className="col-md-6">
              <StaticBox
                title="Your Score Is"
                info={stateInfo.score}
                icon="fa-trophy"
              />
            </div>
          </div>
        </div>
        {stateInfo.score !== 0 && (
          <div className="wrongBody">
            {stateInfo.score !== 100 && (
              <div className="wrongState">
                <h1 className="text-center mb-3">
                  All Wrong Question With Right Answer Is :{" "}
                </h1>
                <div className="row">
                  {stateInfo?.wrongQuestion.map((ele, index) => {
                    return (
                      <div className="col-md-6" key={ele.id}>
                        <QuestionBox
                          questionIndex={index}
                          question={ele}
                          isChoicClickable={false}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {stateInfo.score === 100 && (
              <div className="allCorrect text-center">
                <h4 className="mb-3">Good Job </h4>
                <div className="image">
                  <img src="allCorrect.jpg" alt="" />
                </div>
              </div>
            )}
          </div>
        )}

        <div className=" mt-3 text-center">
          <button
            className="btn btn-primary fs-3"
            onClick={() => {
              dispatch(resetScore());
              dispatch(resetWrongQuestion([]));
              navigate("/");
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
