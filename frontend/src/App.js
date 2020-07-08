import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      val: null,
    };
  }

  componentDidMount() {
    const url = "http://127.0.0.1:8000/home/";
    fetch(url)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
          isLoaded: true,
          val: data,
        })
      );
  }

  render() {
    var {isLoaded, val} = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <div>text: {val.text}</div>
        <div>author: {val.author}</div>
      </div>
    );
  }
}

export default App;
