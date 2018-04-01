import { ADD_RECIPE, EDIT_RECIPE, REMOVE_RECIPE } from "../actions"

// set initial state with three recipes
let initialState = {
  recipes: [
    {
      name: "Pumpkin Pie",
      ingredients: [
        "Pumpkin Puree",
        "Sweetened Condensed Milk",
        "Eggs",
        "Pumpkin Pie Spice",
        "Pie Crust"
      ]
    },
    {
      name: "Spaghetti",
      ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
    },
    {
      name: "Onion Pie",
      ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: action.payload
      }
    case EDIT_RECIPE:
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
