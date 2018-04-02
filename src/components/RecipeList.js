import React from "react"
import { connect } from "react-redux"
import Grid from "material-ui/Grid"
import RecipeSingle from "./RecipeSingle"

const RecipeList = ({ recipes }) => {
  return (
    <Grid container justify="center" spacing={16}>
      {recipes.map((recipe, index) => (
        <RecipeSingle recipe={recipe} key={index} />
      ))}
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList)
