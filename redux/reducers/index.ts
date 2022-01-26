import { combineReducers } from "redux";
import docReducer from "./doc";

const rootReducer = combineReducers({ doc: docReducer });
export default rootReducer