import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Auto Insurance",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 194.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2594.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Dumper Insurance",
      amount: 1294.12,
      date: new Date(2020, 7, 14),
    },
  ];

  return (
    <div>
      <h1> Let's get started. </h1>
      <ExpenseItem
        nameABC={expenses[0].title}
        amountABC={expenses[0].amount}
        dateABC={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        nameABC={expenses[1].title}
        amountABC={expenses[1].amount}
        dateABC={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        nameABC={expenses[2].title}
        amountABC={expenses[2].amount}
        dateABC={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        nameABC={expenses[3].title}
        amountABC={expenses[3].amount}
        dateABC={expenses[3].date}
      ></ExpenseItem>
    </div>
  )
}

export default App;