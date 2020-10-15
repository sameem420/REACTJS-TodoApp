import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
  super()
    this.state = {
      todos : [],
      value : '',
      
    }
  }

  addTodo = () => {
    let val = {title: this.state.value}
    this.setState({
      todos: [...this.state.todos, val],
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
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }
  handleChange = (e,index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }
  updateTodo = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }

  render(){
    let {todos, value} = this.state;
  return (
    <div>
      <input type="text" value={value} onChange={(e) => this.setState({value: e.target.value})} id="new-todo"/>
      <button onClick={this.addTodo}>Add Todo</button>
      <ul>
      {todos.map((val,index) => {
        return  <li key={index}>
        {val.edit? <input type="text" value={val.title} onChange={(e)=>this.handleChange(e,index)}/> : val.title}
        {val.edit?
        <button onClick={() => this.updateTodo(index)}>Update</button>
        :
        <button onClick={() => this.editTodo(index)}>Edit</button>}
        <button onClick={() => this.deleteTodo(index)}>Delete</button>
        </li>     
      })}
      </ul>
    </div>
  );}
}

export default App;
