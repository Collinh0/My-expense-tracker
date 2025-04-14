import { useState } from 'react'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  ); //filter by search element

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };
  //handleAddExpense function to add new expense
  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ExpenseTable
        expenses={filteredExpenses}
       />
    </div>
  );
}

export default App;
