import React, { useState } from 'react';
import NewExpense from './NewExpense';
import Expense from './Expense';
import DisplayExpenses from './DisplayExpenses';

const Expenses = () => {
  const expensesList = JSON.parse(localStorage.getItem('expenses') || '[]');
  const [expenses, setExpenses] = useState<Expense[]>(expensesList);
  const addExpenseHandler = (title: string, amount: number, date: Date) => {
    const newExpense = new Expense(amount, title, new Date(date).toISOString().slice(0, 10));
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
    localStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-orange-600 py-12">Expenses</h1>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
};

export default Expenses;
