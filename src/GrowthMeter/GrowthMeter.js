import { Component } from "react";
import './GrowthMeter.css'


const GrowthMeter = ({valueSeeds}) => {
      console.log(valueSeeds,"<>>>>value")
        return (
         <>      
            <div className="container-list">
                 <ul>Enlightment</ul> 
                 <ul> Blooming </ul>
                <ul>Growth</ul>
                <ul>Beginning</ul>
            </div>
            </>

        )
}

export default GrowthMeter;