export const ADD_RECIPE = "ADD_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

// action sends new recipe to store
export const addRecipe = (title, ingredients) => {
  return {
    type: ADD_RECIPE,
    title: title,
    ingredients: ingredients
  }
}

// edits existing recipe
export const editRecipe = recipe => {
  return {
    type: EDIT_RECIPE,
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
