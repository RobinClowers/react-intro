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

  destroy = todo => {
    const todos = Object.values(this.state.todos)
    const updated = todos
      .filter(entry => entry.id !== todo.id)
      .reduce((result, entry) => result[entry.id] = entry, {})

    this.setState({
      todos: updated,
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
              destroy={this.destroy}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default App;
