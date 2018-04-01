import React from "react"
import RecipeSingle from "./RecipeSingle"

const RecipeList = () => {
  return (
    <div>
      <ul>
        {/* {recipes.map((recipe, index) => (
          <RecipeSingle recipe={recipe} key={index} />
        ))} */}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
    // recipes
  }
}

export default RecipeList
