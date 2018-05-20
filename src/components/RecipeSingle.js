import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "material-ui/Grid"
import { CardHeader, CardContent } from "material-ui/Card"
import IconButton from "material-ui/IconButton"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"
import MoreVertIcon from "material-ui-icons/MoreVert"
import EditRecipeForm from "containers/EditRecipeForm"
import { editRecipe, removeRecipe } from "actions"
import { CardStyle } from "styles"

class RecipeSingle extends Component {
  state = {
    showForm: false
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  deleteRecipe = id => {
    this.props.deleteRecipe(this.props.recipe.id)
  }
  editRecipe = (id, title, ingredients) => {
    const { recipe, editRecipe } = this.props
    editRecipe(recipe.id, recipe.title, recipe.ingredients)
  }
  render() {
    const { recipe } = this.props
    return (
      <Grid item xs={12} sm={6} lg={3}>
        <CardStyle>
          <CardHeader
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
              {recipe.ingredients.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>
              })}
            </Typography>
          </CardContent>
          <Button onClick={this.toggleForm}>Edit</Button>&nbsp;
          <Button onClick={this.deleteRecipe}>Delete</Button>
          <br />
        </CardStyle>
        <EditRecipeForm
          show={this.state.showForm}
          onClose={this.toggleForm}
          recipe={this.props.recipe}
        />
      </Grid>
    )
  }
}

// destructured way to access state.recipes
const mapStateToProps = ({ recipes }) => ({ recipes })

const mapDispatchToProps = dispatch => {
  return {
    deleteRecipe: id => {
      dispatch(removeRecipe(id))
    },
    editRecipe: (id, title, ingredients) => {
      dispatch(editRecipe(id, title, ingredients))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSingle)
