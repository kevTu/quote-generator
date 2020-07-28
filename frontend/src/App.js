import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //isLoaded: false,
      val: {"text": null, "author": null},
    };
  }

  /*componentDidMount() {
    const url = "http://127.0.0.1:8000/";
    fetch(url)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
          isLoaded: true,
          val: data,
        })
      );
  }*/

  getTagQuote = (e) => {
    //console.log(e);
    const url = "http://127.0.0.1:8000/tag/?type=" + e;
    fetch(url)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
          //isLoaded: true,
          val: data,
        })
      )
      .catch(error => {
        console.log(error)
      });
  }

  getRandomQuote = () => {
    const url = "http://127.0.0.1:8000/random/";
    fetch(url)
      .then(resp => resp.json())
      .then(data => 
        this.setState({
          //isLoaded: true,
          val: data,
        })
      )
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    const {val} = this.state;
    /*if(!isLoaded) {
      return (<div>Loading...</div>);
    }*/
    return (
      <div className="App">
        <h1>Based On Tags</h1>
        <button onClick={() => this.getTagQuote("hope")}>Hope</button>
        <button onClick={() => this.getTagQuote("joy")}>Joy</button>
        <button onClick={() => this.getTagQuote("sad")}>Sad</button>
        <h1>Randomizer</h1>
        <button onClick={this.getRandomQuote}>Random Quote</button>
        <div style={{ padding:"100px" }}>
          <div>text: {val.text}</div>
          <div>author: {val.author}</div>
        </div>
      </div>
    );
  }
}

export default App;
