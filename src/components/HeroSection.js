import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video loop autoPlay muted controls width="100%" >
        <source src='../videos/video-2.mp4' type='video/mp4' />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' childern="GET STARTED" buttonStyle='btn--outline' buttonSize='btn--large'>
        </Button>
        <Button className='btns' childern="WATCH TRAILER" buttonStyle='btn--primary' buttonSize='btn--large'>
          <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;