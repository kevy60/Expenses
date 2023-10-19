import './Expemses.css'
import ExpenseItem from'./ExpenseItem';
import Card from "./Card";


function Expense(props){
	return (
		<Card className="exepenses">
		     <ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
		     <ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
		</Card>
	)
}


export default Expenses