import React, { Component } from "react"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import AddIcon from "material-ui-icons/Add"
import AddRecipeForm from "containers/AddRecipeForm"

class AddRecipe extends Component {
  state = {
    showForm: false
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    return (
      <Grid container justify="flex-end" spacing={16}>
        <Grid item xs={12} sm={6} lg={3}>
          <Button variant="fab" color="primary" onClick={this.toggleForm}>
            <AddIcon />
          </Button>
        </Grid>

        <AddRecipeForm show={this.state.showForm} onClose={this.toggleForm} />
      </Grid>
    )
  }
}

export default AddRecipe
