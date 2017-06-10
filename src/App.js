import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';

let nextId = 1

const getId = () => nextId++

const EnterKey = 13

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: '',
    }
  }

  handleKeydown = (event) => {
    if (event.keyCode !== EnterKey) return

    event.preventDefault()

    const title = this.state.newTodo.trim()

    if (title) {
      this.setState({
        todos: [
          ...this.state.todos,
          {title: title, id: getId()}
        ],
        newTodo: '',
      })
    }
  }

  handleChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={this.handleKeydown}
            onChange={this.handleChange}
            value={this.state.newTodo} />
        </header>
        <ul className="todo-list">
          {this.state.todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
        </ul>
      </section>
    );
  }
}

export default App;
