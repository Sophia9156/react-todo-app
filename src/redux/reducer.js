import { combineReducers } from "redux";
import todos from './reducers/todos';
import button from './reducers/button';

const reducer = combineReducers({
  todos,
  button
})

export default reducer;