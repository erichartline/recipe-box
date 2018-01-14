import React, { Component } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Panel, PanelHeader, Box, Subhead } from "rebass"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Panel color="blue">
          <PanelHeader color="white" bg="blue">
            Hello
          </PanelHeader>
          <Box p={3}>
            <Subhead>Panel</Subhead>
          </Box>
        </Panel>
        <Footer />
      </div>
    )
  }
}

export default App
