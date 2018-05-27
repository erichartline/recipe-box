import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import RecipeSingle from "components/RecipeSingle"

const RecipeList = ({ recipes }) => {
  return (
    <Grid container justify="center" spacing={16}>
      {recipes.map((recipe, index) => (
        <RecipeSingle recipe={recipe} key={index} />
      ))}
    </Grid>
  )
}

// destructured way to access state.recipes
const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipeList)
