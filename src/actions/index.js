export const ADD_RECIPE = "ADD_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

// action sends new recipe to store
export const addRecipe = (title, ingredients) => {
  return {
    type: ADD_RECIPE,
    title,
    ingredients: ingredients
      .split(",")
      .filter(el => el !== "")
      .map(el => el.trim())
  }
}

// edits existing recipe
export const editRecipe = (title, ingredients) => {
  return {
    type: EDIT_RECIPE,
    title,
    ingredients: ingredients
      .split(",")
      .filter(el => el !== "")
      .map(el => el.trim())
  }
}

// removes recipe
export const removeRecipe = title => {
  return {
    type: REMOVE_RECIPE,
    title
  }
}
