// create store here
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
const thunk = (store) => (next) => (action) => {
  if (typeof action == "function") {
    return action(store.dispatch);
  }
  next(action);
};
const enhancer = applyMiddleware(thunk);
export const store = createStore(reducer, enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
