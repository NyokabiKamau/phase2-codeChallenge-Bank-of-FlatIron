import React, {useEffect, useState} from "react"
import Navbar from "./Navbar"
import Transactions from "./Transactions"
import TransactionForm from "./TransactionForm"
import "./App.css"

const API = "http://localhost:8001/transactions"

function App() {
    const [transaction, setTransaction] = useState([])
    useEffect(() => {
        fetch(API)
        .then((response) => response.json())
        .then((transaction) => setTransaction(transaction))
    }, [])
    console.log(transaction)

    function handleSubmission(Transactions) {
        console.log(Transactions)
    }

    return (
        <div className="rootDiv">
            <Navbar />
            <TransactionForm prop={handleSubmission} />
            <Transactions transactions={transaction} />
        </div>
    )

}

export default App
