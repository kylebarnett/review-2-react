import React, { Component } from 'react'

class RecipeLanding extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() { 
    return (
      <div>
        Hello!
        {this.props.children}
        </div>
    );
  }
}
 
export default RecipeLanding;