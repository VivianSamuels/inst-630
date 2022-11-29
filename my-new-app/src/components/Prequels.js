import React from 'react'
import { cleanData } from '../App'
import './Prequels.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Prequels() {

    //import data from App.js
    const allData = cleanData();
    //empty array for word count data
    let wordCount = [];


    function toWordCount(data){
        //if wordCount is empty automatically add data
        if (wordCount.length === 0){
            wordCount.push({character: data.character, words: data.line.length});
        //if wordCount does have data
        } else if (wordCount.length > 0){
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count
                if (wordCount[j].character === data.character){
                    wordCount[j].words += data.line.length;
                    //use breack because we're altering the length on each iteration
                    break;
                }
                //if no character matches and reach the end, add a new entry
                else if (wordCount[j].character !== data.character && j === wordCount.length-1){
                    wordCount.push({character: data.character, words: data.line.length});
                    break;
                }
            }
        }
    }
    
    //isolating the characters who spoke the most
    allData.forEach(toWordCount);
    const mostVocal = wordCount.filter(element => element.words > 300)
        return(
            <div className="words-container">
                <BarChart
                width={800}
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
export default Prequels