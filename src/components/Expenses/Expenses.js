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

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectChange={selectChangeHandler}/>

            {
                filteredList.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))
            }
        </Card>
    );
}

export default Expenses;
