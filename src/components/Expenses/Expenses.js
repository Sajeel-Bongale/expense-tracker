import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const selectChangeHandler = selectedYear => {
        setSelectedYear(selectedYear)
    }

    const filteredList = props.items.filter(item => item.date.getFullYear() == selectedYear);

    let expenses = <p>No Expenses found</p>;

    if (filteredList.length > 0) {
        expenses = filteredList.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectChange={selectChangeHandler}/>
            {expenses}
        </Card>
    );
}

export default Expenses;
