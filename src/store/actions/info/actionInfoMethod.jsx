import {
  ADD_WRONG_QUESTION,
  INCREASE_SCORE,
  RESET_SCORE,
  RESET_WRONG_QUESTION,
  TOTAL_QUESTION
} from "./actionInfoVariable";

export const addWrongQuestion = (wrongQuestion) => {
  return {
    type: ADD_WRONG_QUESTION,
    payload: wrongQuestion,
  };
};

export const resetWrongQuestion = (resetQuestion) => {
  return {
    type: RESET_WRONG_QUESTION,
    payload: resetQuestion,
  };
};

export const increaseScore = () => {
  return {
    type: INCREASE_SCORE,
    payload: 10,
  };
};

export const resetScore = () => {
  return {
    type: RESET_SCORE,
    payload: 0,
  };
};

export const getTotalQuestion = (length) => {
  return {
    type: TOTAL_QUESTION,
    payload: length,
  };
};
