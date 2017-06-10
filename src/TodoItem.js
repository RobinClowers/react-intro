import React, { Component } from 'react';

class TodoItem extends Component {
  handleToggle = event => {
    this.props.markComplete(this.props.todo)
  }

  handleDestroy = event => {
    this.props.destroy(this.props.todo)
  }

  render() {
    return (
      <li className={this.props.todo.complete ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.handleToggle}
          />
          <label>
            {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.handleDestroy} />
        </div>
        <input
          ref="editField"
          className="edit"
        />
      </li>
    );
  }
}

export default TodoItem;
