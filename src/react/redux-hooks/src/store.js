import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/index";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
