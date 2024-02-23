import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { questionsReducer } from "./reducers/questionsReducer";
import { infoReducer } from "./reducers/globalInfoReducer";

const rootReducer = combineReducers({
  quize: questionsReducer,
  info:infoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
