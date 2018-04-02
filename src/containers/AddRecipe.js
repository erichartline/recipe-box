import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import AddIcon from "material-ui-icons/Add"
import AddRecipeForm from "../components/AddRecipeForm"
import { addRecipe } from "../actions"
import { TextBoxStyle, InputBoxStyle } from "../styles"

class AddRecipe extends Component {
  state = {
    showForm: false,
    title: "",
    ingredients: ""
  }

  handleInput = e => {
    this.setState({ title: e.target.value })
  }

  handleTextBox = e => {
    this.setState({ ingredients: e.target.value })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  addNewRecipe = (title, ingredients) => {
    this.setState({ showForm: !this.state.showForm })
    this.props.onClick(this.state.title, this.state.ingredients)
    console.log(this.state)
    console.log(this.props)
  }

  render() {
    return (
      <Grid container justify="flex-end" spacing={16}>
        <Grid item xs={12} sm={6} lg={3}>
          <Button variant="fab" color="primary" onClick={this.toggleForm}>
            <AddIcon />
          </Button>
        </Grid>

        <AddRecipeForm show={this.state.showForm} onClose={this.toggleForm}>
          <InputBoxStyle
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Enter recipe name"
          />
          <TextBoxStyle
            value={this.state.ingredients}
            onChange={this.handleTextBox}
            placeholder="Enter the ingredients here..."
          />
          <Button onClick={this.addNewRecipe}>Add Recipe</Button>
        </AddRecipeForm>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (title, ingredients) => {
      dispatch(addRecipe(title, ingredients))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
