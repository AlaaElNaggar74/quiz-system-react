import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_all_question } from "../store/actions/quize/actionMethods";
import {
  addWrongQuestion,
  getTotalQuestion,
  increaseScore,
  resetScore,
  resetWrongQuestion,
} from "../store/actions/info/actionInfoMethod";
import QuestionBox from "../Components/QuestionBox";
import CompleteQuizPage from "./CompleteQuizPage";

import "../Styles/quizPageStyles.css";

function QuizPage(props) {
  const state = useSelector((state) => state.quize);
  const stateInfo = useSelector((state) => state.info);
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [compareAnswer, setCompareAnswer] = useState(0);


  const nextFun = (objQuestion) => {
    if (compareAnswer) {
      if (questionIndex >= state.length) {
        if (compareAnswer === objQuestion.correct_choice) {
        } else {
          console.log("FALSE");
        }
      } else {
        if (compareAnswer === objQuestion.correct_choice) {
          objQuestion.wrongAnswer = "";
          console.log("stateInfo", stateInfo);
          dispatch(increaseScore());
        } else {
          objQuestion.wrongAnswer = compareAnswer;
          dispatch(addWrongQuestion(objQuestion));
          console.log("FALSE");
        }
        setQuestionIndex(questionIndex + 1);
      }
    }
    setCompareAnswer(0);
  };

  useEffect(() => {
    dispatch(fetch_all_question());

    dispatch(getTotalQuestion(state.length));
    dispatch(resetScore());
    dispatch(resetWrongQuestion([]));
  }, [dispatch, state.length]);
  return (
    <>
      <div className="quizPage ">
        <div className="container">
          <h2 className="text-center mb-4">Welcome To Quiz System </h2>
          <div className=" col-md-8 mx-auto">
            {questionIndex < state.length ? (
              <>
                <QuestionBox 
                  question={state[questionIndex]}
                  setCompareAnswer={setCompareAnswer}
                  questionIndex={questionIndex}
                  questionLength={state.length}
                  isChoicClickable={true}
                />

                <div className="homeBtnGro d-flex  justify-content-center mt-3  ">
                  <button
                    disabled={!compareAnswer}
                    className="btn next-btn fs-3 text-white "
                    onClick={() => {
                      nextFun(state[questionIndex]);
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <CompleteQuizPage stateInfo={stateInfo} setQuestionIndex={setQuestionIndex} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
