import ExpenseItem from "./ExpenseItem";

const ExpenseItems = ({ expensesABC }) => {
    return (
        <>
            {expensesABC.map((arr) => {
                return <ExpenseItem
                    nameABC={arr.title}
                    amountABC={arr.amount}
                    dateABC={arr.date}
                    key={arr.title}
                ></ExpenseItem>
            })}
        </>
    )
}

export default ExpenseItems;