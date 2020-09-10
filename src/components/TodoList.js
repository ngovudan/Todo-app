import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodos.map((todo) => (
                    <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text}></Todo>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;