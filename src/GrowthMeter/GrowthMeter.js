import { Component } from "react";
import './GrowthMeter.css'


const GrowthMeter = ({valueSeeds}) => {
    // get the current step from value seeds at index of length - 1
    // add class name function to each step
    // evaluate the current step compared to the parameter passed into the function to determine styles
    const timesWatered = valueSeeds.length ? valueSeeds[valueSeeds.length - 1].timesWatered : 0
 
    const determineStyle = (step) => {
        if (step === timesWatered) {
            return 'bold';
        } else if (step < timesWatered) {
            return 'small'
        }
    }

        return (
         <>      
            <div className="container-list">
                <ul className={determineStyle(4)}>Enlightenment</ul> 
                <div className="line"></div>
                <ul className={determineStyle(3)}>Blooming</ul>
                <div className="line"></div>
                <ul className={determineStyle(2)}>Growth</ul>
                <div className="line"></div>
                <ul className={determineStyle(1)}>Sprouting</ul>
                <div className="line"></div>
                <ul className={determineStyle(0)}>Beginning</ul>
            </div>
            </>

        )
}

export default GrowthMeter;