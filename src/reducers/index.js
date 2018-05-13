import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from "../actions"

// set initial state with three recipes
const initialState = {
  recipes: [
    {
      title: "Pumpkin Pie",
      ingredients: [
        "Pumpkin Puree",
        "Sweetened Condensed Milk",
        "Eggs",
        "Pumpkin Pie Spice",
        "Pie Crust"
      ]
    },
    {
      title: "Spaghetti",
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
    },
    {
      title: "Avocado Toast",
      ingredients: ["Avocado", "Toast"]
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        id: action.id,
        title: action.title,
        ingredients: action.ingredients
      }
    case EDIT_RECIPE:
      if (state.title === action.title) {
        return {
          ...state,
          id: action.id,
          title: action.title,
          ingredients: action.ingredients
        }
      }
      return state
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.id !== action.id)
    default:
      return state
  }
}

export default rootReducer
