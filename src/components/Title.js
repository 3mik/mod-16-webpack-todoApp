import React from 'react';
import style from '../css/Title.css';


const Title = (props) => <h1 className={style.Title}>{props.title} <span>{props.counter}</span></h1>;

export default Title;
