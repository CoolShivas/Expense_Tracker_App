import ExpenseItem from "./components/ExpenseItem";
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

      <ExpenseItems expensesABC={expenses}></ExpenseItems>
    </div>
  )
}

export default App;