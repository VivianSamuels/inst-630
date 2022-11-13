import React from 'react';
import Data from '../data/script-data.json';
// import {LineChart, Line} from 'recharts';

const rawData = Data;

let epiOne = [];
epiOne.push(rawData);


function Menance() {
    return(
       <div className="m-wrapper">
            console.log(epiOne)
       </div>
    )
}
export default Menance