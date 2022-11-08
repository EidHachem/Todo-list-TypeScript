import { v4 as uuidv4 } from 'uuid';

class Todo {
  id: string;
  text: string;
  priority: string;
  time: string;
  completed: boolean;
  addedAt: Date;

  constructor(text: string, priority: string, time: string) {
    this.id = uuidv4();
    this.text = text;
    this.priority = priority;
    this.time = time;
    this.completed = false;
    this.addedAt = new Date();
  }
}

export default Todo;
