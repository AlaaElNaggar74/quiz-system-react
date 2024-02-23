import { All_QUESTIONS } from "./actionVariable";

export const getAlLQuestion = (allQuestions) => {
    return {
      type: All_QUESTIONS,
      payload: allQuestions,
    };
  };

  
  export const fetch_all_question = () => {
    return async (dispatch) => {
      const res = await fetch(`http://localhost:5000/questions/`);
      const data = await res.json();
      dispatch(getAlLQuestion(data));
    };
  };
  