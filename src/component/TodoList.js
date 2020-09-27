import React from 'react';
import Todo from './Todo'

const TodoList = ({filterTodo, todos,setTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todos.filter(todo => {
            if(filterTodo === 'completed'){
              return todo.completed
            } else if(filterTodo === 'uncompleted'){
              return !todo.completed
            }
            return todo
          }).map(todo => <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />)
        }
      </ul>
    </div>
  )
}

export default TodoList;