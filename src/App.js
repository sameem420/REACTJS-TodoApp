import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
  super()
    this.state = {
      todos : [],
      value : ''
    }
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }
  deleteTodo = (index) => {
    this.state.todos.splice(index,1)
    this.setState({
      todos: this.state.todos
    })
  }
  editTodo = (index) => {
    console.log("this is edit")
  }

  render(){
    let {todos, value} = this.state;
  return (
    <div>
      <input type="text" value={value} onChange={(e) => this.setState({value: e.target.value})} id="new-todo"/>
      <button onClick={this.addTodo}>Add Todo</button>
      <ul>
      {todos.map((val,index) => {
        return  <li key={index}>{val}
        <button onClick={() => this.editTodo(index)}>Edit</button>
        <button onClick={() => this.deleteTodo(index)}>Delete</button>
        </li>     
      })}
      </ul>
    </div>
  );}
}

export default App;
