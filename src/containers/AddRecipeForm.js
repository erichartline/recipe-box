import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "material-ui/Button"
import { addRecipe } from "actions"
import { BackdropStyle, ModalStyle, TextBoxStyle, InputBoxStyle } from "styles"

class AddRecipeForm extends Component {
  state = {
    id: "",
    title: "",
    ingredients: ""
  }

  addNewRecipe = (id, title, ingredients) => {
    this.setState({ showForm: !this.state.showForm })
    this.onClick(this.state.id, this.state.title, this.state.ingredients)
    console.log(this.state)
    console.log(this.props)
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
          <InputBoxStyle
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Enter recipe name"
          />
          <br />
          <TextBoxStyle
            value={this.state.ingredients}
            onChange={this.handleTextBox}
            placeholder="Enter the ingredients here..."
          />
          <Button color="primary" onClick={this.props.onClose}>
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
    onClick: (id, title, ingredients) => {
      dispatch(addRecipe(id, title, ingredients))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm)
