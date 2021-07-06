import ExpensesList from "./ExpensesList";
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
            <ExpensesList items={filteredList}/>
        </Card>
    );
}

export default Expenses;
