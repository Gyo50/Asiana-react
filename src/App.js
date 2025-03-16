import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './header/header';
import Sec1 from './sec1/section1';
import Sec2 from './sec2/section2';

function App() {

  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <>
      <Header isScrolled={isScrolled}/>
      <Sec1 />
      <Sec2 isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>
    </>
  );
}

export default App;
