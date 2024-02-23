import React from "react";
import LineIndecator from "./LineIndecator";

function QuestionBox(props) {
  const changeSelectedCho = (selectedNum, selectedEle) => {
    let allCho = document.querySelectorAll(".tt");
    allCho.forEach((ele) => {
      ele.classList.remove("bg-custom-select");

      ele.classList.add("bg-custom-all");
    });
    selectedEle.target.classList.add("bg-custom-select");
    props.setCompareAnswer(selectedNum);
  };

  return (
    <div
      className={`lisChoic  position-relative ${
        props.isChoicClickable ? "" : "mb-3"
      }`}
    >
      {props.isChoicClickable ? (
        // <Linn percent={props.questionIndex * 10} />
        <LineIndecator percent={props.questionIndex * 10}/>
      ) : (
        ""
      )}
      <div className="container">
        <div>
          <h3 className="mb-4">- {props.question?.question} </h3>
          <div className="col-md-10 mx-auto text-center">
            {props.question?.choices.map((cho, index) => {
              return props.isChoicClickable ? (
                <h4
                  key={cho}
                  className="tt bg-custom-all"
                  onClick={($event) => {
                    changeSelectedCho(index + 1, $event);
                  }}
                >
                  {cho}
                </h4>
              ) : (
                <h4
                  key={cho}
                  className={` ${
                    props.question?.wrongAnswer === index + 1
                      ? "bg-custom-wrong"
                      : props.question?.correct_choice === index + 1
                      ? "bg-custom-right"
                      : "bg-custom-all"
                  }  `}
                >
                  {cho}
                </h4>
              );
            })}
          </div>
          {props.isChoicClickable ? (
            <h4 className="te text-end me-3 mt-3">
              <span className="p-2 rounded-2 ">
                {" "}
                The Question : {props.questionIndex + 1} Of{" "}
                {props.questionLength}
              </span>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
