import { Component } from "react";
import './GrowthMeter.css'




class GrowthMeter extends Component {
    constructor(){
        super();
        this.state={};
    }
    render(){
        console.log("hello")
        return (
            <>
            <div className="container">
                <ul>Sprout</ul>
                <ul>Bud</ul>
                <ul>Blooming</ul>
                <ul>Full flower</ul>
                <ul>Sharing/Generosity</ul>
                <ul>Enlightment</ul>

            </div>
            </>

        )
    }
}

export default GrowthMeter;