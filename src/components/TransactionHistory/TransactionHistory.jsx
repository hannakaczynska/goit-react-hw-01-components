import React from 'react';
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
      <table className={css.transactionHistory}>
  <thead>
    <tr className={css.tableTitles}>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
    {items.map(i => (<tr className={css.tableBody} key={i.id}>
          <td>{i.type}</td>
          <td>{i.amount}</td>
          <td>{i.currency }</td>
    </tr>))}        
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,        
    })
  ).isRequired
};

export default TransactionHistory