import React from "react"
import { connect } from "react-redux"
import RecipeSingle from "./RecipeSingle"

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeSingle recipe={recipe} key={index} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
