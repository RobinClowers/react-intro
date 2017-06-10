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
      todos: {},
      newTodo: '',
    }
  }

  handleKeydown = (event) => {
    if (event.keyCode !== EnterKey) return

    event.preventDefault()

    const title = this.state.newTodo.trim()

    if (title) {
      const id = getId()
      this.setState({
        todos: {
          ...this.state.todos,
          [id]: {title: title, id: id}
        },
        newTodo: '',
      })
    }
  }

  handleChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  markComplete = todo => {
    this.setState({
      todos: {
        ...this.state.todos,
        [todo.id]: {...todo, complete: true},
      }
    })
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
          {Object.entries(this.state.todos).map(([id, todo]) =>
            <TodoItem
              key={id}
              todo={todo}
              markComplete={this.markComplete}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default App;
