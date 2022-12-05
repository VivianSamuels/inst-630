import React from 'react'
import { theData } from '../App'


function Planets() {
    let locations = [];
    
    for (let i = 0; i < theData.length; i++){
        if (!locations.includes(theData[i].scene.location)){
            locations.push(theData[i].scene.location);
        }
    }
    //console.log(locations.includes("REPUBLIC CRUISER"));
    console.log(locations);

    return (
        <div className="planets-container">
        </div>
    )
}

export default Planets;