import styles from "./ExpenseItem.module.css";

const ExpenseItem = () => {
    const expenseDate = new Date(2024, 2, 12);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294;
    return (
        <div className={styles.expense_item}>
            <div> {expenseDate.toISOString()} </div>
            <div
                className={styles.expense_item__description}>
                <h2> {expenseTitle} </h2>
            </div>
            <div
                className={styles.expense_item__price}>
                ₹ {expenseAmount}
            </div>
        </div>
    )
}

export default ExpenseItem;