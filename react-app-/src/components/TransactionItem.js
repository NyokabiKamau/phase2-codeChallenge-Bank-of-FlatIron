import React from "react";

function TransactionItem(props) {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            
        </tr>
    )
}

export default TransactionItem