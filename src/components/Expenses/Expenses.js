import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card"; 
import ExpensesFilter from "./ExpensesFilter";



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] =
    useState('2023')


    console.log('Year data in Expenses.js ' + filteredYear)


    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }




return (
  <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {props.expenses
      .filter(expense => expense.date.getFullYear().toString() === filteredYear)
      .map(expense => (
        <ExpenseItem expenseData={expense} key={expense.id} />
      ))}
  </Card>
);

}










export default Expenses;
