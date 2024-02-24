
import ExpenseItems from "./components/ExpenseItems";


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
      date: new Date(2021, 1, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2594.12,
      date: new Date(2022, 5, 1),
    },
    {
      id: "e4",
      title: "Dumper Insurance",
      amount: 1294.12,
      date: new Date(2023, 9, 21),
    },
  ];

  return (
    <div>

      <h1> Expense Tracker App. </h1>
      <ExpenseItems expensesABC={expenses}></ExpenseItems>
    </div>
  )
}

export default App;