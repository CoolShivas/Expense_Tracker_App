import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";



const ExpenseItem = (props) => {

    return (
        <div className={styles.expense_item}>
            <ExpenseDate
                dateXYZ={props.dateABC}
            ></ExpenseDate>
            <div
                className={styles.expense_item__description}>
                {/* <ExpenseDetails
                    nameXYZ={props.nameABC}
                ></ExpenseDetails> */}
                {props.titleABC}
            </div>
            <div
                className={styles.expense_item__price}>
                {/* <ExpenseDetails
                    amountXYZ={props.amountABC}
                ></ExpenseDetails> */}
                ₹ {props.amountABC}
            </div>

            <div>

                <button> Add </button>

                <button onClick={() => { props.handleOnDeleteXYZ(props.titleABC) }}> Delete </button>

            </div>
        </div>
    )
}

export default ExpenseItem;