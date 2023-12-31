import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CreativeShowcase from './components/CreativeShowcase';
import CreatorWord from './components/CreatorWord';
import ShowCast from './components/ShowCast';
import CreatorFans from './components/CreatorFans';
import TurnPassions from './components/TurnPassions';
import Imagery from './components/Imagery';
import Footer from './components/Footer';

function App() {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <Navbar/>
      <CreativeShowcase/>
      <CreatorWord/>
      <ShowCast/>
      <CreatorFans/>
      <TurnPassions/>
      <Imagery/>
      <Footer/>
    </div>
  )
}

export default App;
