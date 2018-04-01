import React, { Component } from "react"
import Button from "material-ui/Button"
import { BackdropStyle, ModalStyle } from "../styles"

class AddRecipeForm extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null
    }

    return (
      <BackdropStyle>
        <ModalStyle>
          {this.props.children}

          <div>
            <Button color="primary" onClick={this.props.onClose}>
              Add
            </Button>
            <Button color="secondary" onClick={this.props.onClose}>
              Cancel
            </Button>
          </div>
        </ModalStyle>
      </BackdropStyle>
    )
  }
}

export default AddRecipeForm
