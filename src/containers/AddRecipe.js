import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "material-ui/Button"
import AddIcon from "material-ui-icons/Add"
import Modal from "./Modal"
// import { addRecipe } from "../actions"
import { InputBox } from "../styles"

class AddRecipe extends Component {
  state = {
    showForm: false,
    value: ""
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    return (
      <div>
        <Button variant="fab" color="primary" onClick={this.toggleForm}>
          <AddIcon />
        </Button>

        <Modal show={this.state.showForm} onClose={this.toggleForm}>
          <InputBox
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter a recipe here..."
          />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(AddRecipe)
