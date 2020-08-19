import React, { Component } from 'react'

export default class TodoItem extends Component {
  
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <>
            <h6>{title}</h6>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
            </>
        )
    }
}
