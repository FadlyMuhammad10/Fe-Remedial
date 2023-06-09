import { globalReducer } from "./global";
import {combineReducers} from 'redux';


const reducer = combineReducers({
  globalReducer,
});

export default reducer;
