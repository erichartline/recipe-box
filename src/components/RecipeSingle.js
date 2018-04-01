import React from "react"
import Collapsible from "react-collapsible"
import Grid from "material-ui/Grid"
import { RecipePanel, RedButton, WhiteButton } from "../styles"

const RecipeSingle = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <RecipePanel>
          <Collapsible trigger="Start here">
            <h2>Ingredients</h2>
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <WhiteButton>Edit</WhiteButton>&nbsp;
            <RedButton>Delete</RedButton>
            <br />
          </Collapsible>
        </RecipePanel>
      </Grid>
    </Grid>
  )
}

export default RecipeSingle
