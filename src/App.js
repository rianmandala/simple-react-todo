import React, {useState} from 'react';
import './App.css';
import Form from './component/Form'
import TodoList from './component/TodoList'

function App() {

  const getTodosFromStoragehandler = () => {
    if(!localStorage.getItem('todos')){
      localStorage.setItem('todos',[])
      return []
    }
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(getTodosFromStoragehandler)
  const [filterTodo, setFilterTodo] = useState('all')

  return (
    <div className="App">
      <header>
      <h1 className="title">Simple Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos}  
            inputText={inputText}  setInputText={setInputText} 
            setFilterTodo={setFilterTodo}
            filterTodo={filterTodo}
      />
      <TodoList filterTodo={filterTodo} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
