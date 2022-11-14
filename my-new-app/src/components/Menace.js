import React from 'react'
import Data from '../data/script-data.json'
import { LineChart, Line, BarChart, XAxis } from 'recharts'


function Menance() {
    const rawData = Data.scripts;
    //console.log(rawData[0].type);
    let epiOne = [];
    for (let i = 0; i<Object.keys(rawData).length; i++) {
        if (rawData[i].episode === 1 & rawData[i].type === "dialogue"){
            epiOne.push(rawData[i]);
        }
    }
    console.log(epiOne[0].line.length);
    console.log(epiOne[0].line.split(" "));



    return(
       <div className="m-wrapper">
        {/* <BarChart width={100%} aspect={3} data={rawData}>
            <XAxis datakey="character"/>
        </BarChart> */}
       </div>
    )
}
export default Menance