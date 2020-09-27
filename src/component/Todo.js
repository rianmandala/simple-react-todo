import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, todos, setTodos})=> {
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  }
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {
          ...todo, completed: !todo.completed
        };
      }
      return item;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{todo.text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Todo;