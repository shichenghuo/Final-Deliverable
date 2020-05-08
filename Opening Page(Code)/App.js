import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        {/* <h1> Polyomino match</h1> */}
        <h1 class="title1">
          <span>P</span>
          <span>O</span>
          <span>L</span>
          <span>Y</span>
          <span>O</span>
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>O</span>
        </h1>
        <h1 class="title2">match</h1>
        <img src="Tetris-01.png" alt="box" height="400" />
      </p>
    ),
    buttons: [{ label: "Start Game" }]
    // { label:"Tutorial", page:"tutorial"}]
    // buttons2:[{label:"Tutorial", page:"tutorial"}],
  },

  tutorial: {
    content: (getData, setData) => (
      <p>
        Player 1 and Player two can control different part of the Tetris. By
        having different poses, you can
      </p>
    )
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName],
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
