import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  render() {
    return (
      <div className="card-wrapper">
        card: {this.props.cardNum}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.pageData = {
      pageXData: [],
      pageYData: []
    }
  }
  captureMouseMoves = (event) => {
    const pageXData = this.pageData.pageXData;
    const pageYData = this.pageData.pageYData;
    pageXData.push(event.pageX);
    pageYData.push(event.pageY);
    this.pageData = {
      pageXData: pageXData,
      pageYData: pageYData
    }
    console.log()
  }
  render() {
    return (
      <div className="App" onMouseMove={(event) => this.captureMouseMoves(event)}>
        {
          [1, 2, 3, 4, 5].map(x => <Card cardNum={x} />)
        }
      </div>
    );
  }
}

export default App;
