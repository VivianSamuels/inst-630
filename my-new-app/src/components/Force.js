import React from 'react'
import { theData } from '../App'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Force() {
    const allData = theData;
    let forceCount = [];

    function toForceCount(data) {
        let x = 0;
        //com
        if (data.line.includes("force") || data.line.includes("Force")){
            for (let i = 0; i < data.line.length; i++) {
                if (data.line[i] === "force" || data.line[i] === "Force"){
                    x++;
                }
            }
        }
        if (forceCount.length === 0){
            forceCount.push({character: data.character,force: x})
        } else if (forceCount.length > 0) {
            for (let j = 0; j<forceCount.length; j++) {
                if(forceCount[j].character === data.character){
                    forceCount[j].force += x;
                    break;
                } else if (forceCount[j].character !== data.character && j === forceCount.length-1) {
                    forceCount.push({character: data.character, force: x});
                    break;
                }
            }
        }
    }
      
  

    allData.forEach(toForceCount)
    //console.log(forceCount);
 
                                          

        
        return(
            <div className="words-container">
                <BarChart
                width={800}
                height={300}
                data={forceCount}
                margin={{
                 top: 5,
                 right: 30,
                 left: 20,
                bottom: 5
                 }}
                >
                     <XAxis dataKey="character" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="force" fill="#8884d8" barSize={15}/>
                    </BarChart>
            </div>

        )
}
export default Force