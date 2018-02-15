import React from 'react';
import style from '../css/Todo.css';

const Todo = ({todo, handlerDelete}) => {
    return (
        <p className={style.TodoItem} onClick={handlerDelete.bind(this, todo.id)}>
            {todo.text}
        </p>
    )
}

export default Todo;