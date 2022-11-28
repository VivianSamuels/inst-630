import React from 'react'
import Data from '../data/script-data.json'

function Prequels(){
    
    //push all dialogue data from episode 2 to an array
    for (let i = 0; i<Object.keys(rawData).length; i++) {
        //first movie and dialogue lines only
        if (rawData[i].episode ==< 2 & rawData[i].type === "dialogue"){
            epiTwo.push(rawData[i])
        }
    }
}
export default Prequels