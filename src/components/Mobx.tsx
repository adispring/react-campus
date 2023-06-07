import React from 'react';
import {
  observable,
  action,
  makeObservable,
  makeAutoObservable,
  runInAction,
} from 'mobx';
import { observer } from 'mobx-react';
import '../utils/computed';

class CounterStore {
  count = 0;

  constructor() {
    // makeAutoObservable(this, {}, { autoBind: true });
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action,
    });
  }

  increment() {
    this.count++;
  }

  decrement = () => {
    this.count--;
  };
}

const counterStore = new CounterStore();

runInAction(() => {
  counterStore.count = 100;
});

const Counter = observer(() => (
  <div>
    <p>Count: {counterStore.count}</p>
    <button onClick={counterStore.increment}>+</button>
    <button onClick={counterStore.decrement}>-</button>
  </div>
));

export default function Example() {
  return (
    <div>
      <Counter />
    </div>
  );
}
