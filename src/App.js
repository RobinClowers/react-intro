import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" />
        </header>
        <ul className="todo-list">
          <li>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
              />
              <label>
                Example Item
              </label>
              <button className="destroy" />
            </div>
            <input
              ref="editField"
              className="edit"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default App;
