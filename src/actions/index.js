export const ADD_RECIPE = "ADD_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

// action sends new recipe to store
export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe
  }
}

// removes recipe
export const removeRecipe = recipe => {
  return {
    type: REMOVE_RECIPE,
    recipe
  }
}
