import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "material-ui/Button"
import { editRecipe } from "actions"
import { BackdropStyle, ModalStyle, TextBoxStyle } from "styles"

class EditRecipeForm extends Component {
  state = {
    id: this.props.recipe.id,
    title: this.props.recipe.title,
    ingredients: this.props.recipe.ingredients
  }
  editRecipe = (id, title, ingredients) => {
    const { editRecipe } = this.props
    editRecipe(this.state.id, this.state.title, this.state.ingredients)
    this.props.onClose()
  }

  handleInput = e => {
    this.setState({ title: e.target.value })
  }

  handleTextBox = e => {
    this.setState({ ingredients: e.target.value })
  }

  render() {
    // render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }
    return (
      <BackdropStyle>
        <ModalStyle>
          <TextBoxStyle value={this.state.title} onChange={this.handleInput} />
          <br />
          <TextBoxStyle
            value={this.state.ingredients}
            onChange={this.handleTextBox}
          />
          <br />
          <Button color="primary" onClick={this.editRecipe}>
            Update
          </Button>
          <Button color="secondary" onClick={this.props.onClose}>
            Cancel
          </Button>
        </ModalStyle>
      </BackdropStyle>
    )
  }
}

// destructured way to access state.recipes
const mapStateToProps = ({ recipes }) => ({ recipes })

const mapDispatchToProps = dispatch => {
  return {
    editRecipe: (id, title, ingredients) => {
      dispatch(editRecipe(id, title, ingredients))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipeForm)
