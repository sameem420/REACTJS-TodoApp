import React from 'react';
import './App.css';
import 'cirrus-ui';

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
      <div className="wrapper">
        <div className="row">
            <div className="col-8">
              <div className="input-control">
                <input type="text" value={value} onChange={(e) => this.setState({value: e.target.value})} id="new-todo"/>
              </div>
            </div>
            <div className="col-4">
              <div className="input-control">
                <button className="btn-dark" onClick={this.addTodo}>Add Todo</button>
              </div>
            </div>
        </div>
        <hr></hr>
        <div className="row">
          <div class="col-12">
            <ol>
            {todos.map((val,index) => {
              return  <li key={index}>
              {val.edit ? <div class="input-control"><input type="text" className="text-success input-success" value={val.title} onChange={(e)=>this.handleChange(e,index)}/></div> : val.title}
              <br/>
              {val.edit ?
              <button className="btn-success" onClick={() => this.updateTodo(index)}>Update</button>
              :
              <button className="btn-link" onClick={() => this.editTodo(index)}>Edit</button>}
              <button className="btn-danger" onClick={() => this.deleteTodo(index)}>Delete</button>
              </li>     
            })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default App;
