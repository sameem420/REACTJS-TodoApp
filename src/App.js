import React from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import delIcon from './assets/images/delete.png';
import editIcon from './assets/images/edit.png';
import updatedIcon from './assets/images/updated.png';

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
      <div className="container">
        <div className="row wrapper">
            <div className="col s12 center">
              <div className="col s7 input-field">
                <input type="text" value={value} onChange={(e) => this.setState({value: e.target.value})} id="new-todo"/>
                <label for="new-todo">Enter something To-do</label>
              </div>  
              <div className="col s5">
                <button className="btn waves-effect waves-teal btnAddTodo" onClick={this.addTodo}>Add Todo</button>
              </div>
            </div>
        </div>
        <div>
          <div className="row">
            <ul>
            {todos.map((val,index) => {
              return  <li key={index}>
                <div className="col s8 todolist-item">
                  {val.edit ? <div><input type="text"  value={val.title} onChange={(e)=>this.handleChange(e,index)}/></div> : val.title}
                </div>
                <div className="col s4 buttons">
                  <div className="col s6">
                  {val.edit ?
                    <button className="btn-flat waves-light " onClick={() => this.updateTodo(index)}><img src={updatedIcon} alt="Update Icon" id="delicon" /></button>
                    :
                    <button className="btn-flat waves-light" onClick={() => this.editTodo(index)}><img src={editIcon} alt="Edit Icon" id="delicon" /></button>}
                  </div>
                  <div className="col s6">
                    <button className="btn-flat waves-light" onClick={() => this.deleteTodo(index)}><img src={delIcon} alt="Delete Icon" id="delicon" /></button>
                  </div>
                </div>
              </li>     
            })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default App;
