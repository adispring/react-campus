import React, { useContext } from 'react';

// 创建一个 Context 对象
const Context = React.createContext('My Value');

// 创建一个 Provider 组件
function Provider(props: { children: React.ReactNode }) {
  return <Context.Provider value="My Value">{props.children}</Context.Provider>;
}

// 在 Consumer 中访问 Context 数据
function Consumer() {
  const value = useContext(Context);
  return <div>{value}</div>;
}

export default function App() {
  return (
    <Provider>
      <Consumer />
    </Provider>
  );
}
