import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from "actions"

// set initial state with three recipes
const initialState = {
  recipes: [
    {
      id: "1",
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
      id: "2",
      title: "Spaghetti",
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
    },
    {
      id: "3",
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
        recipes: [...state.recipes, action.payload]
      }
    case EDIT_RECIPE:
      if (state.title === action.payload.title) {
        return {
          ...state,
          recipes: [...state.recipes, action.payload]
        }
      }
      return state
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default rootReducer
