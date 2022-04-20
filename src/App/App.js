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
  plantSeed = (name) => { 
    let newSeed = {
      id: Date.now(),
      name,
      timesWatered: 0
    }
    this.setState({ valueSeeds: [ ...this.state.valueSeeds, newSeed ]}, this.saveToStorage);
  }

  // use this in Garden >> Flower to update how many times the flower has been watered
  waterPlant = (id) => {
    const updatedPlants = this.state.valueSeeds.map(plant => {
      if (plant.id === id && plant.timesWatered < 4) {
        const {id, name, timesWatered} = plant
        const newCount = plant.timesWatered += 1; 
        return {id, name, timesWatered: newCount}
      } else {
        return plant
      }
    })
    console.log(updatedPlants)
    this.setState({valueSeeds: updatedPlants})
  }

  saveToStorage = () => {
    // MVP: only saving one plant
    localStorage.setItem("plant",JSON.stringify(this.state.valueSeeds[0]));
  }

  retreiveFromStorage = () => {
    // MVP: only setting 1 plant!
    const currentPlant = localStorage.getItem("plant");
    this.setState({ valueSeeds: [currentPlant] });
  }

  render() {
    return (
      <div className="App">
        <SeedPacket plantSeed={this.plantSeed} />
        <Garden waterPlant={this.waterPlant} valueSeeds={this.state.valueSeeds} />
      </div>
    );
  }
}

