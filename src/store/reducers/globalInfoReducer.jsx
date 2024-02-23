import {
  ADD_WRONG_QUESTION,
  INCREASE_SCORE,
  RESET_SCORE,
  RESET_WRONG_QUESTION,
  TOTAL_QUESTION
} from "../actions/info/actionInfoVariable";

let stateObj = {
  totalQuestion: 0,
  correctQuestion: [],
  wrongQuestion: [],
  score: 0,
};

export const infoReducer = (state = stateObj, action) => {
  switch (action.type) {
    case ADD_WRONG_QUESTION:
      state.wrongQuestion.push(action.payload);
      return state;
    case RESET_WRONG_QUESTION:
      state.wrongQuestion = action.payload;
      return state;
    case RESET_SCORE:
      state.score = action.payload;
      return state;
    case INCREASE_SCORE:
      state.score += action.payload;
      return state;
    case TOTAL_QUESTION:
      state.totalQuestion = action.payload;
      return state;
    default:
      return state;
  }
};
