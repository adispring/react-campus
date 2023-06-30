import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

// 1 定义 store 类
class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => this.count++;
  decrement = () => this.count--;
}

// 2 创建 store 对象
const store = new CounterStore();

// 3 定义使用 store 的 Counter 组件
const Counter = observer(({ store }: { store: CounterStore }) => (
  <div>
    <div>{store.count}</div>
    <button onClick={store.decrement}>-</button>
    <button onClick={store.increment}>+</button>
  </div>
));

// 4 向组件传入 store
const App = () => <Counter store={store} />;

export default App;
