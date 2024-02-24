import ExpenseItem from "./ExpenseItem";

const ExpenseItems = (props) => {
    return (
        <div>
            <ExpenseItem
                nameABC={props.expensesABC[0].title}
                amountABC={props.expensesABC[0].amount}
                dateABC={props.expensesABC[0].date}
            ></ExpenseItem>
            <ExpenseItem
                nameABC={props.expensesABC[1].title}
                amountABC={props.expensesABC[1].amount}
                dateABC={props.expensesABC[1].date}
            ></ExpenseItem>
            <ExpenseItem
                nameABC={props.expensesABC[2].title}
                amountABC={props.expensesABC[2].amount}
                dateABC={props.expensesABC[2].date}
            ></ExpenseItem>
            <ExpenseItem
                nameABC={props.expensesABC[3].title}
                amountABC={props.expensesABC[3].amount}
                dateABC={props.expensesABC[3].date}
            ></ExpenseItem>


        </div>
    )
}

export default ExpenseItems;