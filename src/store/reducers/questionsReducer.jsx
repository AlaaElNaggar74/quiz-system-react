import { All_QUESTIONS } from "../actions/quize/actionVariable";

export const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case All_QUESTIONS:
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};
