import React from 'react';
import style from '../css/TodoList.css';

const TodoList = props => {    
    const items = props.items.map(item => {
        return(
            <p key={item.id} className={style.TodoItem} onClick={props.handlerDelete.bind(this, item.id)}>
                {item.text}
            </p>
        );   

    });

    return (
        <div>
            {items}
        </div> 
    );     

};

export default TodoList;


