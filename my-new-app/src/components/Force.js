import React from 'react'
import Data from '../data/script-data.json'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Force() {
    //get the data from the separate JSON file
    const rawData = Data.scripts;
    let prequelData = [];
    let forceCount = [];

    //push all dialogue data from episode 1 to an array
    for (let i = 0; i<Object.keys(rawData).length; i++) {
        //first movie and dialogue lines only
        if (rawData[i].episode <= 3 & rawData[i].type === "dialogue"){
            prequelData.push(rawData[i])
        }
    }

    //removes all dialogue directions & splits by whitespace  
    function cleanText(data){
        let c = "";
        let d = []
        if (data.line.includes("(")) {
             c = data.line.replace(/ *\([^)]*\) */g, "");
             d = c.split(" ");
             data.line = d;
        } else {
            c = data.line
            d = c.split(" ");
            data.line = d;
        }
    }

    function toForceCount(data) {
        let x = 0;
        //if dialogue has the word force
        if (data.line.includes("force") || data.line.includes("Force")){
            for (let i = 0; i < data.line.length; i++) {
                if (data.line[i] === "force" || data.line[i] === "Force"){
                    x++;
                }
            }
        //if force count is empty, push the data
        if (forceCount.length === 0){
            forceCount.push({character: data.character,force: x});
        } else if (forceCount.length > 0) {
            for (let j = 0; j<forceCount.length; j++){
                //when characters match, adjust force count
                if (forceCount[j].character === data.character){
                    forceCount[j].force += x;
                    //use breack because we're altering the length on each iteration
                    break;
                }
                //if no character matches and reach the end, add a new entry
                else if (forceCount[j].character !== data.character && j === forceCount.length-1){
                    forceCount.push({character: data.character, force: x});
                    break;
                }
            }
         }
        }
    }

    console.log(forceCount);
 
    prequelData.forEach(cleanText);
    //isolating the number of times that force is said
    prequelData.forEach(toForceCount);

                                          

        
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