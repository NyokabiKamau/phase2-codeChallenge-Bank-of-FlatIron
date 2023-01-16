import TransactionItem from "./TransactionItem";

function Transactions({transactions}) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th> 
                    <th>Amount</th>
                </tr>
                {transactions.map(transaction => {
                return <TransactionItem 
                key={transaction.id} 
                date={transaction.date} 
                description={transaction.description} 
                category={transaction.category} 
                amount={transaction.amount}
                />
            })}
           </tbody>
        </table>
    )
}

export default Transactions