import { useState } from 'react'
import SearchBar from "./components/SearchBar"
import './App.css'
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>  Expense Tracker</h1>
      <div className="card">
        <p>
       Track and manage your expenditure!
        </p>
      </div>
      
    </>
  )
}

export default App
