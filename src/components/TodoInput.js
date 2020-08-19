import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={item}></input>
          <button disabled={item ? false : true}>
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
