import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
        <h2 className='hero_title'>Aktuální nabídka</h2>
        <div className="hero_subcopy">
            <p>Nejnovější prémiové produkty od předních českých designerů.</p>
            <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
        </div>
    </div>
  );
};

export default Hero;