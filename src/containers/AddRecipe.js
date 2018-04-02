import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import AddIcon from "material-ui-icons/Add"
import AddRecipeForm from "../components/AddRecipeForm"
// import { addRecipe } from "../actions"
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

  render() {
    return (
      <Grid container justify="flex-end">
        <Grid item>
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

export default connect(mapStateToProps)(AddRecipe)
