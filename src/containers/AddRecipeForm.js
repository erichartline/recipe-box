import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "material-ui/Button"
import { addRecipe } from "actions"
import { BackdropStyle, ModalStyle, TextBoxStyle } from "styles"

const randomId = Math.floor(Math.random() * 1000)

class AddRecipeForm extends Component {
  state = {
    id: randomId.toString(),
    title: "",
    ingredients: ""
  }

  addNewRecipe = (id, title, ingredients) => {
    this.props.addNewRecipe(
      this.state.id,
      this.state.title,
      this.state.ingredients
    )
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
          <TextBoxStyle
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Enter recipe name"
          />
          <br />
          <br />
          <TextBoxStyle
            value={this.state.ingredients}
            onChange={this.handleTextBox}
            placeholder="Enter the ingredients here..."
          />
          <br />
          <Button color="primary" onClick={this.addNewRecipe}>
            Add
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
    addNewRecipe: (id, title, ingredients) => {
      dispatch(addRecipe(id, title, ingredients))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm)
