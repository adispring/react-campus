import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
    // makeObservable(this, {
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    // });
  }

  increment() {
    this.count++;
  }

  decrement = () => {
    this.count--;
  };
}

const counterStore = new CounterStore();

const Counter = observer(() => (
  <div>
    <p>Count: {counterStore.count}</p>
    <button onClick={() => counterStore.increment()}>+</button>
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
