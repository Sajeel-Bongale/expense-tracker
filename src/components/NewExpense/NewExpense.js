import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import {useState} from "react";

const NewExpense = (props) => {

    const [showAddExpense, setShowAddExpense] = useState(true);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    };

    const addExpenseHandler = () => {
        setShowAddExpense(false)
    };

    const cancelHandler = () => {
        setShowAddExpense(true)
    }

    let content = <AddExpense onAddExpense={addExpenseHandler}/>;

    if (!showAddExpense) {
        content = <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
    }

    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense;
