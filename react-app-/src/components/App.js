import React, {useEffect} from "react"
import Navbar from "./Navbar"

const API = "http://localhost:8001/transactions"

function App() {
    useEffect(() => {
        fetch(API)
        .then((response) => response.json())
        .then((transaction) => console.log(transaction))
    })

    return (
        <div className="rootDiv">
            <Navbar />
        </div>
    )

}

export default App
