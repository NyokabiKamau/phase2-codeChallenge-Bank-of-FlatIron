import React, {useState} from "react"

function TransactionForm({prop}) {
    const [formItem, setFormItem] = useState({
        date:"", 
        description:"",
        category:"", 
        amount:0, 
    })

    function addTransaction(e) {
        e.preventDefault()
        prop(formItem)
    } 

    function handleChange(e) {
        setFormItem({...formItem, [e.target.name]:[e.target.value]})
    }

    return (
        <form onChange={handleChange} id="form-item" onSubmit={addTransaction} >
            <div className="form-inputs">
                <label htmlFor="date">Date</label>
                <input value={formItem.date} name="date" type="date" id="date"/>
                <input value={formItem.description} name="description" type="text" placeholder="Description" className="text-input"/>
                <input value={formItem.category} name="category" type="text" placeholder="Category" className="text-input"/>
                <input name="amount" value={formItem.amount} type="number"/>
            </div>
            <button >Add Transaction</button>
        </form>
    )
}

export default TransactionForm