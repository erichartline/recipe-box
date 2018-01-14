export const ADD_RECIPE = "ADD_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

// action sends new recipe to store
export const addRecipe = text => {
  return {
    type: ADD_RECIPE,
    text
  }
}

// removes recipe
export const removeRecipe = text => {
  return {
    type: REMOVE_RECIPE,
    text
  }
}
