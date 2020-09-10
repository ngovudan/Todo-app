import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect (()=>{
    getLocalTodos();
  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status ]);
  //fun
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
      break;
    }
  };
  const saveLocalTodos =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () =>{
    if (localStorage.getItem("todos") === null ) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>NHỮNG CÔNG VIỆC HÀNG NGÀY</h1>
      </header>
      <Form status={status} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}></Form>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}></TodoList>
    </div>
  );
}

export default App;
