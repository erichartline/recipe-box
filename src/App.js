import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RecipeList from "./components/RecipeList"
import AddRecipe from "./containers/AddRecipe"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeList recipes={this.props.recipes} />
        <AddRecipe />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(App)
