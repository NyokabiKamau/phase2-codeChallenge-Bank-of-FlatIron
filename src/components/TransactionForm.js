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
        setFormItem({
        date:"", 
        description:"",
        category:"", 
        amount:0,  
    })
    } 

    function handleChange(e) {
        setFormItem({...formItem, [e.target.name]:[e.target.value]})
    }

    return (
        <form onSubmit={addTransaction} id="form-item" >
            <div className="form-inputs">
                <input onChange={handleChange} value={formItem.date} name="date" type="date" id="date"/>

                <input onChange={handleChange} value={formItem.description} name="description" type="text" placeholder="Description" className="text-input"/>

                <input onChange={handleChange} value={formItem.category} name="category" type="text" placeholder="Category" className="text-input"/>

                <input onChange={handleChange} name="amount" value={formItem.amount} type="number"/>
            </div>
            <button>Add Transaction</button>
        </form>
    )
}

export default TransactionForm