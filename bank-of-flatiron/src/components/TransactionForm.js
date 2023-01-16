function TransactionForm() {
    return (
        <form id="form-item">
            <div className="form-inputs">
                <label htmlFor="date">Date</label>
                <input type="date" id="date"/>
                <input type="text" placeholder="Description" className="text-input"/>
                <input type="text" placeholder="Category" className="text-input"/>
                <input type="number"/>
            </div>
            <button >Add Transaction</button>
        </form>
    )
}

export default TransactionForm