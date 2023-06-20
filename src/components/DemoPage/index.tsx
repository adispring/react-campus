import React from 'react';
import './styles/layout.css';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import Content from './components/Content';

const DemoPage = () => (
  <div className="App">
    <NavigationBar />
    <div className="container">
      <SideBar />
      <Content />
    </div>
  </div>
);

export default DemoPage;
