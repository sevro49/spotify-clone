import React from 'react';

// css
import './index.css';

// components
import Header from "./components/Header";
import MainContent from './components/MainContent';
import Api from "./components/Api"

function App() {
  return (

    <div className="App">
      <Header />

      <MainContent/>

      <Api/>
    </div>

  );
}

export default App;
