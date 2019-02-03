import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  state = {
    'am I?': false
  }
  render() {
    if (this.state['am I?']) {
      return (
        <div className="App">
          <button
            onClick={() => this.setState({ 'am I?': !this.state['am I?']})}
          >press
          </button>
          <header className="App-header">
            <h1>Rock on! This is it!!!</h1>
          </header>
        </div>
      );
    }else{
      return (
        <div>
          <button
            onClick={() => this.setState({ 'am I?': !this.state['am I?']})}
          >press
          </button>
          <h1>Not this time pal!</h1>
        </div>
      )
    }
  }
}

export default App;
