import React, { Component } from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import RecipeList from "components/RecipeList"
import AddRecipe from "components/AddRecipe"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeList />
        <AddRecipe />
        <Footer />
      </div>
    )
  }
}

export default App
