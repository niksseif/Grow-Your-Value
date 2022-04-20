import React from 'react';
import bud from '../assets/BUD.png';
import rose from '../assets/ROSE 2.png';
import sprout from '../assets/SPROUT.png';
import stem from '../assets/STEM.png';
import './Garden.css';


const Garden = ({waterPlant, valueSeeds}) => {
  const {id, name, timesWatered} = valueSeeds[0];

// if timesWatered is 0 - mound of earth
    // 1 = stem
    // 2 = first leaves
    // 3 = bud
    // 4 = rose

  return (
    <section className="garden">
      <section className="plant-section">
        <div className="plant">
          <h2>{name}</h2>
          {timesWatered === 4 && <img className="rose" src={rose} alt='drawing of rose'/>}
          {timesWatered === 3 && <img className="bud" src={bud} alt='drawing of bud'/>}
          {timesWatered === 2 && <img className="sprout" src={sprout} alt='drawing of sprout'/>}
          {timesWatered === 1 && <img className="stem" src={stem} alt='drawing of stem'/>}
          {/* {timesWatered === 0 && <img src={dirt} alt='drawing of dirt'/>} */}
          {/* <img src={bud} alt='drawing of a flower bud'/> */}
        </div>
      </section>
      <div className="soil" />
    </section>
  )
}

export default Garden;