import React, { Component } from 'react';
import axios from 'axios'
import ListItem from './ListItem'

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      userInput : ''
    }

    this.addItem = this.addItem.bind(this)
  }

  handleUser = (event) =>{
    this.setState({
      userInput : event.target.value
    })
  }

  addItem(){
  //do some axios stuff
  //this is where we want to add some items
  //pass items with params, query, or data
    let obj = {
      item: this.state.userInput
    }
    axios.post('/api/list', obj).then(results => {
      this.setState({
        list: results.data,
        userInput: '',
        edit: false
      })
    })
  }

  componentDidMount(){
    axios.get('/api/list').then(results => {
      this.setState({
        list: results.data
      })
    })
  }

  deleteItem = (id) => {
    axios.delete(`/api/list/${id}`).then(results => {
      this.setState({
        list: results.data
      })
    })
  }

  updateList = (newList) => {
    this.setState({
      list: newList
    })
  }

  render() { 
    return (
      <div>
        {
          this.state.list.map((element,index) => {
            return (
              <ListItem shoppingItem={element} updateList={this.updateList} deleteItem={this.deleteItem}/>
            )
          })
        }
        <input value={this.state.userInput} onChange={this.handleUser}></input>
        <button onClick={this.addItem}>Submit Item</button>
      </div>
    );
  }
}
 
export default List;

//want this list component to be a very basic to-do list component. Want to hit the backend and do full CRUD.