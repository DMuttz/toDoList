import React, { Component } from 'react'; 

class ElementCreator extends Component { 
    render() {
      return  (
          <ul>
            {this.props.starTrek.map((xyz, index) => <li key ={index}>{xyz}</li>)}
          </ul>
      );
    }
  }
  
  export default ElementCreator;
  
  
  
  