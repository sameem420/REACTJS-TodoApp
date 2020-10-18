import React from 'react';
import './App.css';
import 'cirrus-ui';
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
          <div className="col-12">
            <ul className="menu">
            {todos.map((val,index) => {
              return  <li key={index}>
                <div className="col-7 todolist-item">
                  {val.edit ? <div className="input-control"><input type="text" className="text-success input-success" value={val.title} onChange={(e)=>this.handleChange(e,index)}/></div> : val.title}
                </div>
                <div className="col-4">
                  <div className="col-6">
                  {val.edit ?
                    <button className="btn" onClick={() => this.updateTodo(index)}><img src={updatedIcon} id="delicon" /></button>
                    :
                    <button className="btn" onClick={() => this.editTodo(index)}><img src={editIcon} id="delicon" /></button>}
                  </div>
                  <div className="col-6">
                    <button className="btn" onClick={() => this.deleteTodo(index)}><img src={delIcon} id="delicon" /></button>
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
