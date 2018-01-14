import { ADD_RECIPE, REMOVE_RECIPE } from "../actions"

// set empty initial state
let initialState = {
  recipes: []
}

const rootReducer = (state = initialState, action) => {
  // add switch for add/remove recipes
  switch (action.type) {
    case ADD_RECIPE:
      return {
        recipes: []
      }
    case REMOVE_RECIPE:
      return {
        recipes: []
      }
    default:
      return state
  }
}

export default rootReducer
