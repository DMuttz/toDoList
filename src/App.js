import React, { Component } from 'react';
import './App.css';
import ElementCreator from './elementCreator'

class App extends Component {
  state = {
    input: '',
    list: [],
    test: "hello, I'm a big test"
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
  })
}

  render() {
    return  (
    <div className="App">
      <header className ="App-header">
      <h1>To Do List</h1>
        <form onSubmit={this.onSubmit}> 
          <input value={this.state.input} onChange={this.onChange}/>
          <br/>
          <button>Submit</button> 
          <ElementCreator starTrek={this.state.list}/>
        </form> 
      </header> 
    </div>
    );
  }
}

export default App;



