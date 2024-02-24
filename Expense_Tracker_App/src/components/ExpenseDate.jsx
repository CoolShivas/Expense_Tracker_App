import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {

    const month = props.dateXYZ.toLocaleString('en-US', { month: 'long' });
    const day = props.dateXYZ.toLocaleString('en-US', { day: '2-digit' });
    const year = props.dateXYZ.getFullYear();

    return <div className={styles.expense_date}>
        <div className={styles.expense_date__month}> {month} </div>
        <div className={styles.expense_date__day}> {day} </div>
        <div className={styles.expense_date__year}> {year} </div>
    </div>
}

export default ExpenseDate;