import React, { Component } from 'react';
import './SeedPacket.css'
class SeedPacket extends Component{ 
  constructor() {
    super();
    this.state ={
      name: "",
    }
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }
  handleSubmit(e){
    console.log(e,"<>>>eee")
    e.preventDefault();
    this.props.plantSeed(this.state.name)
    this.setState({name: ""});
  }
  render(){
    return (
      <div className='container'>
          <form onSubmit={(e) => this.handleSubmit(e) }>
          <div className='oval'></div>
            <label htmlFor='seed-name'>
              <input id="seed-name" type = "text" value = {this.state.name} onChange={(e) =>this.handleChange(e)} placeholder="Seed name"></input>
              </label>
              <button className='submit-bttn'>Submit</button> 
          </form>
      </div>
    )
}
}

export default SeedPacket;