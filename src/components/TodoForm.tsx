import React from 'react'

export const TodoForm: React.FC = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Enter name of todo" />
      <label htmlFor="title" className="active">
        Enter name of todo
      </label>
    </div>
  )
}