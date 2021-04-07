import { combineReducers } from "redux";
import { postDocument } from "./postDocuments";
import auth from './auth';


export const reducers = combineReducers({
    postDocument,
    auth
})

