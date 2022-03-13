import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/sections/header'
import Body from './components/sections/body';
import Footer from './components/sections/footer';

// === variables
const navList = ["home", "gallery", "msg"]

function App() {
  return (
    <React.Fragment>
      "hello world"
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </React.Fragment>    
  );
}

export default App;
