import React from "react"
import Grid from "material-ui/Grid"
import Card, { CardHeader, CardContent } from "material-ui/Card"
import Avatar from "material-ui/Avatar"
import IconButton from "material-ui/IconButton"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"
import MoreVertIcon from "material-ui-icons/MoreVert"
import { CardStyle } from "../styles"

const RecipeSingle = ({ recipe }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <CardStyle>
        <CardHeader
          avatar={<Avatar aria-label="Recipe">R</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.title}
        />
        <h3>Ingredients</h3>
        <CardContent>
          <Typography component="p">
            {recipe.ingredients.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </Typography>
        </CardContent>
        <Button>Edit</Button>&nbsp;
        <Button>Delete</Button>
        <br />
      </CardStyle>
    </Grid>
  )
}

export default RecipeSingle
