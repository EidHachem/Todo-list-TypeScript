import React from 'react';
import Expense from './Expense';

const DisplayExpenses: React.FC<{ expenses: Expense[] }> = (props) => {
  return (
    <div className="container mx-auto max-w-5xl pb-10">
      <h1 className="text-center text-3xl text-orange-600 py-12">Expenses List</h1>
      <table className="w-full border border-orange-600 rounded-sm border-separate text-white">
        <thead>
          <tr className="bg-orange-600">
            <th className="py-2">Title</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-900">
          {props.expenses.map((expense) => (
            <tr key={expense.id} className="border-b border-gray-300 text-center">
              <td className="py-2">{expense.title}</td>
              <td className="py-2">{expense.amount}</td>
              <td className="py-2">{expense.date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-orange-600 text-center">
          <tr>
            <td className="py-2">Total</td>
            <td className="py-2">
              {props.expenses.reduce((total, expense) => total + expense.amount, 0)}
            </td>
            <td className="py-2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DisplayExpenses;
