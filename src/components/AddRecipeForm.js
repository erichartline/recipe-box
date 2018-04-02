import React from "react"
import Button from "material-ui/Button"
import { BackdropStyle, ModalStyle } from "../styles"

const AddRecipeForm = props => {
  // render nothing if the "show" prop is false
  if (!props.show) {
    return null
  }

  return (
    <BackdropStyle>
      <ModalStyle>
        {props.children}
        <div>
          <Button color="primary" onClick={props.onClose}>
            Add
          </Button>
          <Button color="secondary" onClick={props.onClose}>
            Cancel
          </Button>
        </div>
      </ModalStyle>
    </BackdropStyle>
  )
}

export default AddRecipeForm
