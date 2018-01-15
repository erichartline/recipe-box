import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RecipeList from './components/RecipeList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeList />
        <Footer />
      </div>
    )
  }
}

export default App
