import { v4 as uuidv4 } from 'uuid';

class Expense {
  id: string;
  amount: number;
  title: string;
  date: string;

  constructor(amount: number, title: string, date: string) {
    this.id = uuidv4();
    this.amount = amount;
    this.title = title;
    this.date = date;
  }
}

export default Expense;
