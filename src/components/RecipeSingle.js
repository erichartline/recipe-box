import React from "react"
import Grid from "material-ui/Grid"
import Card from "material-ui/Card"
import { RecipePanel, RedButton, WhiteButton } from "../styles"

const RecipeSingle = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <RecipePanel>
          <Card>
            <h2>Ingredients</h2>
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <WhiteButton>Edit</WhiteButton>&nbsp;
            <RedButton>Delete</RedButton>
            <br />
          </Card>
        </RecipePanel>
      </Grid>
    </Grid>
  )
}

export default RecipeSingle
