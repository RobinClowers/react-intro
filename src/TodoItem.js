import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            {this.props.todo.title}
          </label>
          <button className="destroy" />
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
