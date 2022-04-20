import React, { Component } from 'react';

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
    e.preventDefault();
    this.props.plantSeed(this.state.name)
  }
  render(){
    return (
      <>
        <h1>SeedPacket</h1>
        <div>
          <form onSubmit={(e) => this.handleSubmit(e) }>
            <label htmlFor='seed-name'>
              <input id="seed-name" type="text" onChange={(e) =>this.handleChange(e) }></input>
              </label>
            <button>Submit</button> 
          </form>
        </div>
      </>
    )
}
}

export default SeedPacket;