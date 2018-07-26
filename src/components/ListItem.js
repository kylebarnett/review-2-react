import React, { Component } from 'react';
import axios from 'axios'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editValue: props.shoppingItem.item
    }
  }

  changeEdit = () => {
    this.setState({
      //bang is take the opposite of
      edit: !this.state.edit
    })
  }

  handleChange = (event) => {
    this.setState({
      editValue: event.target.value
    })
  }

  updateItem = () => {
    let obj = {
      editValue: this.state.editValue
    }
    axios.put(`/api/list/${this.props.shoppingItem.id}`, obj).then(results => {
      //call parent method
      this.props.updateList(results.data)
      this.setState({
        edit: !this.state.edit
      })
    })
  }

  render() { 
    let {shoppingItem} = this.props
    return (
      !this.state.edit
      ?
      <div>
        <p>{shoppingItem.item}</p>
        <button onClick={() => this.props.deleteItem(shoppingItem.id)}>Delete</button>
        <button onClick={this.changeEdit}>Edit</button>
      </div>
      :
      <div>
        <input value={this.state.editValue} onChange={this.handleChange}></input>
        <button onClick={() => this.props.deleteItem(shoppingItem.id)}>Delete</button>
        <button onClick={() => this.updateItem()}>Submit Edit</button>
        <button onClick={this.changeEdit}>Cancel</button>
    </div>
    );
  }
}
 
export default ListItem;