import React, { Component } from "react"
import "./App.css"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

const responseFacebook = response => {
  console.log("facebook response", response)
}

const componentClicked = event => {
  console.log("clicked", event)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Find Your Cluster</h1>
            <p className="lead">
              A cluster forms when 8 people of about the same age, maybe even
              born on the same day, are connected despite coming from very
              diverse backgrounds.
            </p>
            <hr className="my-4" />
            <p className="button-list">
              <FacebookLogin
                appId="1904644719557229"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                render={renderProps => (
                  <button
                    className="btn btn-dark btn-lg"
                    onClick={renderProps.onClick}
                  >
                    Activate Psycellium
                  </button>
                )}
              />
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://www.facebook.com/groups/1612660195660988/"
                role="button"
              >
                Facebook Group
              </a>
            </p>
          </div>
        </div>
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
