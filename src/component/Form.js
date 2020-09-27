import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Form = ({setInputText, inputText, todos, setTodos, setFilterTodo, filterTodo}) => {

  const inputTextHandler = ({target:title})=>{
    setInputText(title.value)
  }

  const submitFormHandler = (event)=>{
    event.preventDefault()
    const currentTodos = [...todos,{text:inputText, completed: false, id: parseInt(Math.random()*1000)}]
    setTodos(currentTodos)
    setInputText('')
    localStorage.setItem('todos', JSON.stringify(currentTodos))
  }

  const filterTodoHandler = (event) => {
    setFilterTodo(event.target.value)
  }

  return (
    <form onSubmit={submitFormHandler} className="form-todo">
      <div className="container-todo-input">
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
        <button className="todo-button" type="submit">
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        </button>
      </div>
      <div className="select">
        <select onChange={filterTodoHandler} name="todos" value={filterTodo} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;