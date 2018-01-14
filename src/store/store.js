import { applyMiddleware, createStore } from "redux"
import rootReducer from "../reducers"
import logger from "redux-logger"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

export default store
