import React from "react"
import Grid from "material-ui/Grid"
import Card from "material-ui/Card"
import Button from "material-ui/Button"

const RecipeSingle = ({ recipe }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card>
        <h1>{recipe.name}</h1>
        <h2>Ingredients</h2>
        <p>{recipe.ingredients}</p>
        <Button>Edit</Button>&nbsp;
        <Button>Delete</Button>
        <br />
      </Card>
    </Grid>
  )
}

export default RecipeSingle
