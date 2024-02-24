import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {

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