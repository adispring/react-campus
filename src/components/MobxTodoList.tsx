import React from 'react';
import { makeObservable, observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

export class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

export class TodoList {
  todos: Todo[] = [];

  constructor(todos: Todo[] = []) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      // addTodo: action,
    });
    this.todos = todos;
  }

  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  // addTodo() {
  //   this.todos.push(new Todo());
  // }
}

const TodoView = observer(({ todo }: { todo: Todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    {todo.title}
  </li>
));

const TodoListView = observer(({ todoList }: { todoList: TodoList }) => (
  <div>
    <ul>
      {todoList.todos.map((todo) => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
));

export default TodoListView;
