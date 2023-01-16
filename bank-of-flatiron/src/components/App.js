import React, {useEffect, useState} from "react"
import Navbar from "./Navbar"
import Transactions from "./Transactions"

const API = "http://localhost:8001/transactions"

function App() {
    const [transaction, setTransaction] = useState([])
    useEffect(() => {
        fetch(API)
        .then((response) => response.json())
        .then((transaction) => setTransaction(transaction))
    }, [])
    console.log(transaction)

    return (
        <div className="rootDiv">
            <Navbar />
            <Transactions transactions={transaction} />
        </div>
    )

}

export default App
