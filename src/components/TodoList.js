import React from 'react';
import Todo from '../components/Todo';
import style from '../css/TodoList.css';


const TodoList = props => {    
    const items = props.items.map(todo => {
        return(
            <Todo key={todo.id} todo={todo} handlerDelete={props.handlerDelete}/>
        );
    }); 

    return (
        <div className={style.TodoList}>
            {items}
        </div> 
    );     

};

export default TodoList;


