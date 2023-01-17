import React from "react";
import TransactionItem from "./TransactionItem";

function Transactions({transactions, setTransactions, search}) {

  let transactionList;

  if(transactions){
    const filteredTransactions = transactions.filter(transaction => {
      return (
        transaction.description.toLowerCase().includes(search.toLowerCase()) || transaction.category.toLowerCase().includes(search.toLowerCase())
      )
    })
    transactionList = filteredTransactions.map((transaction) => (    
      <TransactionItem
        key={transaction.id}
        id = {transaction.id}
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
      />
    ))
  }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th> 
                    <th>Amount</th>
                </tr>
               {transactionList}
           </tbody>
        </table>
    )
}

export default Transactions