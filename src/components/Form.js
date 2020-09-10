import React from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
function Form({ inputText, setInputText , setTodos, todos, setStatus}) {
    const inputTextHandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 100}
        ]);
        setInputText("");
    };
    const statusHandler = (e) =>{
        // console.log(e.target.value);
        setStatus(e.target.value);
    }
    return (
        <form>
            <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input value={inputText} onChange={ inputTextHandler }/>
            </FormControl>
            <Button disabled={!inputText} onClick={ submitTodoHandler} type="submit" variant="contained" color="secondary">
                Add Todo
            </Button>
            {/* <input value={inputText} onChange={ inputTextHandler } type="text" className="todo-input" /> */}
            {/* <button disabled={!inputText} onClick={ submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button> */}
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">Tất Cả</option>
                <option value="completed">Đã Hoàn Thành</option>
                <option value="uncompleted">Chưa Hoàn Thành</option>
            </select>
            </div>
        </form>
    );
}

export default Form;