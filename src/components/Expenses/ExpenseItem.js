import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title);
    const [isUpdated, setIsUpdated] = useState(false);

    const clickHandler = () => {
        if (isUpdated) {
            setTitle(props.expenseData.title); 
        } else {
            setTitle('Updated!'); 
        }
        setIsUpdated(!isUpdated); 
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;
