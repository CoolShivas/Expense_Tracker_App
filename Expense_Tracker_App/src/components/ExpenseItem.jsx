import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2024, 2, 12);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294;
    return (
        <div className={styles.expense_item}>
            <div> {props.dateABC.toISOString()}
            </div>
            <div
                className={styles.expense_item__description}>
                <h2> {props.nameABC} </h2>
            </div>
            <div
                className={styles.expense_item__price}>
                ₹ {props.amountABC}
            </div>
        </div>
    )
}

export default ExpenseItem;