import React, {useEffect, useState} from "react"
import Navbar from "./Navbar"
import Transactions from "./Transactions"
import TransactionForm from "./TransactionForm"
import "./App.css"
import SearchForm from "./SearchForm"


const API = "https://api.npoint.io/4fe36224ecb93bdeec6a/transactions/"
// const local = "http://localhost:8001/transactions"

function App() {
    const [transaction, setTransaction] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(API)
        .then((response) => response.json())
        .then((transaction) => setTransaction(transaction))
    }, [])
    console.log(transaction)

    function handleSubmission(Transactions) {
        console.log(Transactions)
        setTransaction(transaction => [...transaction, Transactions])
    }

    // const persist = {
    //     method: "POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body: JSON.stringify(Transactions)
    // }
    // fetch(API, persist)
    // .then(response => response.json())
    // .then(data =>  setTransaction(transaction => [...transaction, data])
    // .catch(error => console.log(error)))


    // const filtered = transaction.filter(data => {
    //     data.description.toLowerCase().includes(search.toLocaleLowerCase()) || data.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    // })

    return (
        <div className="rootDiv">
            <Navbar />
            <SearchForm search={search} setSearch={setSearch}/>
            <TransactionForm prop={handleSubmission} />
            <Transactions transactions={transaction} setTransactions={setTransaction} search={search} />
        </div>
    )
}

export default App
