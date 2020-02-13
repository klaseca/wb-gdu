import { combineReducers } from "redux";
import { mainReducer } from './main/mainReducers';
import { settingsReducer } from './settings/settingsReducers';

export default combineReducers({
  main: mainReducer,
  settings: settingsReducer
});
