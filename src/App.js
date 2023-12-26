import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CreativeShowcase from './components/CreativeShowcase';

function App() {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <Navbar/>
      <CreativeShowcase/>
    </div>
  )
}

export default App;
