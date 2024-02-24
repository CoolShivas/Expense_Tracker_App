import ExpenseItem from "./ExpenseItem";

const ExpenseItems = ({ expensesABC }) => {
    return (
        <div>
            {expensesABC.map((arr) => {
                return <ExpenseItem
                    nameABC={arr.title}
                    amountABC={arr.amount}
                    dateABC={arr.date}
                    key={arr.title}
                ></ExpenseItem>
            })}
        </div>
    )
}

export default ExpenseItems;