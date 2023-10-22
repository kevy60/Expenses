import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }


    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }






    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="1" step="1" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="expense-form__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
