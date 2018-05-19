import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "reducers"
import { loadState, saveState } from "utils/localStorage"

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
