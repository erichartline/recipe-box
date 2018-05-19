export const ADD_RECIPE = "ADD_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"

// action sends new recipe to store
export const addRecipe = (id, title, ingredients) => {
  return {
    type: ADD_RECIPE,
    payload: {
      id,
      title,
      ingredients: ingredients
        .split(",")
        .filter(el => el !== "")
        .map(el => el.trim())
    }
  }
}

// edits existing recipe
export const editRecipe = (id, title, ingredients) => {
  return {
    type: EDIT_RECIPE,
    payload: {
      id,
      title,
      ingredients: ingredients
        .split(",")
        .filter(el => el !== "")
        .map(el => el.trim())
    }
  }
}

// removes recipe
export const removeRecipe = id => {
  return {
    type: REMOVE_RECIPE,
    payload: {
      id
    }
  }
}
