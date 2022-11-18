import React from 'react'
import Data from '../data/script-data.json'
import { LineChart, Line, BarChart, XAxis } from 'recharts'


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

    //remove directions/cues
    epiOne.forEach(cleanText);

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


    epiOne.forEach(toGraphData);
                                                     

        
 
    return(
       <div className="m-wrapper">
        {/* <BarChart width={100%} aspect={3} data={rawData}>
            <XAxis datakey="character"/>
        </BarChart> */}
       </div>
    )
}
export default Menance