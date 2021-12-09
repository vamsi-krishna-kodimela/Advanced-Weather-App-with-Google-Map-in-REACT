import { createStore } from "redux";
import coordsReducer from "./reducers/coords-reducer";
const store = createStore(
  coordsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
