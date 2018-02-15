import React from 'react';
import style from '../css/TodoForm.css';


const TodoForm = ({addHandler}) => {

    let input;

    return (
        <div className={style.todoForm}>
            <input ref={el => {input = el}} type="text" id="newTodo" placeholder="Add new task..."/>
            <span onClick={() => {addHandler(input.value);  input = '';}} className={style.addBtn}>
                Add
            </span>
        </div>        
    );
}

export default TodoForm;