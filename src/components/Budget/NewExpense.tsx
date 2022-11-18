import React, { useRef } from 'react';
import Expense from './Expense';

const NewExpense: React.FC<{
  addExpenseHandler: (title: string, amount: number, date: Date) => void;
}> = (props) => {
  const defaultAmount = 10;
  const titleRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = titleRef.current!.value;
    const enteredAmount = amountRef.current!.value;
    const enteredDate = dateRef.current!.value;

    if (
      enteredTitle.trim().length !== 0 &&
      enteredAmount.trim().length !== 0 &&
      enteredDate.trim().length !== 0
    ) {
      props.addExpenseHandler(enteredTitle, +enteredAmount, new Date(enteredDate));
      titleRef.current!.value = '';
      amountRef.current!.value = defaultAmount.toString();
      dateRef.current!.value = '';
    }
  };
  return (
    <form className="flex flex-col items-center gap-y-5" onSubmit={submitHandler}>
      <div className="w-[30em] flex justify-between items-center">
        <label htmlFor="title" className="text-amber-900 text-xl font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-input min-w-[80%]"
          placeholder="fix laptop..."
          ref={titleRef}
        />
      </div>
      <div className="w-[30em] flex justify-between items-center">
        <label htmlFor="amount" className="text-amber-900 text-xl font-semibold">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          min="0.01"
          step="0.01"
          className="form-input min-w-[80%]"
          defaultValue={defaultAmount}
          ref={amountRef}
        />
      </div>
      <div className="w-[30em] flex justify-between items-center">
        <label htmlFor="date" className="text-amber-900 text-xl font-semibold">
          Date
        </label>
        <input type="date" id="date" className="form-input min-w-[80%]" ref={dateRef} />
      </div>
      <div className="form-actions">
        <button type="submit" className="text-white bg-orange-600 p-2 rounded">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpense;
