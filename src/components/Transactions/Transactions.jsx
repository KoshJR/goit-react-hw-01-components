import css from './Transactions.module.css';
import { TableRow } from './TableRow';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};
