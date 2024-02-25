
import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";


const ExpenseItem = (props) => {

    return (
        <div className={styles.expense_item}>

            {/* <div> {props.dateABC.toISOString()} </div> */}

            <ExpenseDate
                dateXYZ={props.dateABC}
            ></ExpenseDate>

            <div
                className={styles.expense_item__description}>

                {/* <h2> {props.nameABC} </h2> */}

                <ExpenseDetails
                    nameXYZ={props.nameABC}
                ></ExpenseDetails>
            </div>

            <div
                className={styles.expense_item__price}>

                {/* ₹ {props.amountABC} */}

                <ExpenseDetails
                    amountXYZ={props.amountABC}
                ></ExpenseDetails>

            </div>
        </div>
    )
}

export default ExpenseItem;