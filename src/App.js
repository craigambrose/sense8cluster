import React, { Component } from "react"
import "./App.css"
import Jumbotron from "./Jumbotron"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
  }

  setUser = user => {
    this.setState({ user })
  }

  render() {
    return (
      <div className="App">
        <Jumbotron onLogin={this.setUser} user={this.state.user} />
        <section>
          <div className="container">
            To get started, edit <code>src/App.js</code> and save to reload.
          </div>
        </section>
      </div>
    )
  }
}

export default App
