import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const items = props.items

    const selectChangeHandler = selectedYear => {
        setSelectedYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onSelectChange={selectChangeHandler}/>

            <ExpenseItem title={items[0].title}
                         amount={items[0].amount}
                         date={items[0].date}>
            </ExpenseItem>

            <ExpenseItem title={items[1].title}
                         amount={items[1].amount}
                         date={items[1].date}>
            </ExpenseItem>

            <ExpenseItem title={items[2].title}
                         amount={items[2].amount}
                         date={items[2].date}>
            </ExpenseItem>

            <ExpenseItem title={items[3].title}
                         amount={items[3].amount}
                         date={items[3].date}>
            </ExpenseItem>
        </Card>
    );
}

export default Expenses;
