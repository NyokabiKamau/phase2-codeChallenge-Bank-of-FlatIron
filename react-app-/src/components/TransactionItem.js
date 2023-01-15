import React from "react";

function TransactionItem(props) {
    return (
        <table>
            <tr>
               <td>{props.date}</td>
               <td>{props.description}</td>
               <td>{props.category}</td>
               <td>{props.amount}</td>
            </tr>
        </table>
    )
}

export default TransactionItem