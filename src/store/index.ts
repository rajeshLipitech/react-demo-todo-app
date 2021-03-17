import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  /* eslint-disable no-underscore-dangle */
  const store = createStore(rootReducer, composeEnhancers());
  /* eslint-enable */
  return store;
}
