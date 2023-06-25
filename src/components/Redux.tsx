import React from 'react';
import { createStore, Reducer } from 'redux';
import { Provider, connect } from 'react-redux';

// 定义 action 类型
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// 定义 state 类型
type State = { count: number };

// 1.1 定义 reducer 函数
const reducer: Reducer<State, Action> = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 1.2 定义 action 函数
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// 1.3 创建 store 对象
const store = createStore(reducer);

// 2.1 定义 Counter 组件
const Counter = (
  props: ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps
) => (
  <div>
    <button onClick={props.decrement}>-</button>
    <span>{props.count}</span>
    <button onClick={props.increment}>+</button>
  </div>
);

// 2.2 将 Counter 组件连接到 store
const mapStateToProps = (state: State) => ({ count: state.count });
const mapDispatchToProps = { increment, decrement };
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// 3.1 在组件树的最顶层添加 Provider
const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default App;
