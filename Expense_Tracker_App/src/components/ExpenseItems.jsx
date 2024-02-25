import ExpenseItem from "./ExpenseItem";

const ExpenseItems = ({ expensesABC, handleOnDeleteABC }) => {
    return (
        <>
            {expensesABC.map((arr) => {
                return <ExpenseItem
                    titleABC={arr.title}
                    amountABC={arr.amount}
                    dateABC={arr.date}
                    key={arr.title}
                    handleOnDeleteXYZ={handleOnDeleteABC}
                ></ExpenseItem>
            })}
        </>
    )
}

export default ExpenseItems;