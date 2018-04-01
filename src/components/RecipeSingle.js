import React from "react"
import Grid from "material-ui/Grid"
import Card from "material-ui/Card"
import Button from "material-ui/Button"

const RecipeSingle = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <Card>
          <h2>Ingredients</h2>
          <p>Recipe goes here.</p>
          <Button>Edit</Button>&nbsp;
          <Button>Delete</Button>
          <br />
        </Card>
      </Grid>
    </Grid>
  )
}

export default RecipeSingle
