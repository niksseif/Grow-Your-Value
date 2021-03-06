import React from 'react';
import dirt from '../assets/Dirt.png';
import bud from '../assets/bud-final.png';
import rose from '../assets/rose-final.png';
import sprout from '../assets/sprout-final.png';
import stem from '../assets/stem-final.png';
import './Garden.css';


const Garden = ({waterPlant, valueSeeds}) => {
  const {id, name, timesWatered} = valueSeeds[valueSeeds.length-1] ? valueSeeds[valueSeeds.length-1] : {id: 0, name: 'Add a Value and help it grow', timesWatered: 0};

// if timesWatered is 0 - mound of earth
    // 1 = stem
    // 2 = first leaves
    // 3 = bud
    // 4 = rose

  return (
    <section className="garden">
      <section className="plant-section">
        <div className="plant">
          {timesWatered === 4 && <img className="rose fade-in" src={rose} alt='drawing of rose'/>}
          {timesWatered === 3 && <img className="bud fade-in" src={bud} alt='drawing of bud'/>}
          {timesWatered === 2 && <img className="sprout fade-in" src={sprout} alt='drawing of sprout'/>}
          {timesWatered === 1 && <img className="stem fade-in" src={stem} alt='drawing of stem'/>}
          {timesWatered === 0 && <img className="dirt" src={dirt} alt='drawing of dirt'/>}
          {/* <img src={bud} alt='drawing of a flower bud'/> */}
          <h2>{name}</h2>
          <p>Ruminate on your value to help it grow!</p>
          <button onClick={() => waterPlant(id)}>Ruminate!</button>
        </div>
      </section>
      </section>
  )
}

export default Garden;