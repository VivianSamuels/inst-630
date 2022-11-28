import React from 'react'
import Data from '../data/script-data.json'
import './Menace.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Menance() {
    //get the data from the separate JSON file
    const rawData = Data.scripts;
    let epiOne = [];
    let graphData = [];

    //push all dialogue data from episode 1 to an array
    for (let i = 0; i<Object.keys(rawData).length; i++) {
        //first movie and dialogue lines only
        if (rawData[i].episode === 1 & rawData[i].type === "dialogue"){
            epiOne.push(rawData[i])
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


    function toGraphData(data){
        //if graphData is empty automatically add data
        if (graphData.length === 0){
            graphData.push({character: data.character, words: data.line.length});
        //if graphData does have data
        } else if (graphData.length > 0){
            for (let j = 0; j<graphData.length; j++){
                //when characters match, adjust word count
                if (graphData[j].character === data.character){
                    graphData[j].words += data.line.length;
                    //use breack because we're altering the length on each iteration
                    break;
                }
                //if no character matches and reach the end, add a new entry
                else if (graphData[j].character !== data.character && j === graphData.length-1){
                    graphData.push({character: data.character, words: data.line.length});
                    break;
                }
            }
        }
    }

 
    epiOne.forEach(cleanText);
    epiOne.forEach(toGraphData);
    //isolate the characters who say more than 300 words
    const mostVocal = graphData.filter(element => element.words > 300)

    
    console.log(mostVocal);                                            

        
        return(
            <div className="menace-container">
                <BarChart
                width={500}
                height={300}
                data={mostVocal}
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
                     <Bar dataKey="words" fill="#8884d8" barSize={15}/>
                    </BarChart>
        </div>

        )
}
export default Menance