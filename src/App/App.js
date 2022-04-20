import { Component } from 'react';
import Garden from '../Garden/Garden.js';
import SeedPacket from '../SeedPacket/SeedPacket.js';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // {id: id, name: 'value', timesWatered: 0}
      valueSeeds: [] 
    }
  }

  // use this in SeedPacket to add a new valueSeed to state
  // Assumes that SeedPacket will call this method, passing in an object with relevant seed data
  plantSeed = (newSeed) => { 
    newSeed.id = Date.now();
    this.setState({ valueSeeds: [ ...this.state.valueSeeds, newSeed ]});
  }

  // use this in Garden >> Flower to update how many times the flower has been watered
  waterPlant = (id) => {
    this.state.valueSeeds.forEach(plant => {
      if (plant.id === id && plant.timesWatered < 4) {
        plant.timesWatered += 1;
      }
    })
  }

  saveToStorage = () => {
    // MVP: only saving one plant
    localStorage.setItem("plant", this.state.valueSeeds[0]);
  }

  retreiveFromStorage = () => {
    // MVP: only setting 1 plant!
    const currentPlant = localStorage.getItem("plant");
    this.setState({ valueSeeds: [currentPlant] });
  }

  render() {
    return (
      <div className="App">
        <SeedPacket plantSeed = {this.plantSeed} />
        <Garden waterPlant = {this.waterPlant} />
      </div>
    );
  }
}

