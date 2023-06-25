import React, { useContext } from 'react';

// 创建一个 Context 对象
const UserInfoContext = React.createContext({ name: 'Dan', isLogin: false });

// 创建一个 Provider 组件
function Provider(props: { children: React.ReactNode }) {
  const userInfo = { name: 'Dan', isLogin: true };

  // 在 Provider 中传递数据
  return (
    <UserInfoContext.Provider value={userInfo}>
      {props.children}
    </UserInfoContext.Provider>
  );
}

// 在 Child 中访问 Context 数据
function Child() {
  const userInfo = useContext(UserInfoContext);
  return <div>{userInfo.name}</div>;
}

export default function App() {
  return (
    <Provider>
      <Child />
    </Provider>
  );
}
