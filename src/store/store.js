import { applyMiddleware, createStore } from "redux"
import rootReducer from "../reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, thunk)
  )
  return store
}

export default configureStore
