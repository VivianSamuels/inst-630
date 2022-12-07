import React from 'react'
import { theData } from '../App'
import './Words.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Prequels() {
    //import data from App.js
    //const allData = theData;


    //empty array for word count data
    let wordCount = [];
    
    //move word count data from allData to wordCount
    function toWord(data){
        //if the array is empty
        if (wordCount.length === 0){
            //add the very first entry
            wordCount.push({character: data.character, episodeOne: data.line.length, episodeTwo: 0, episodeThree: 0,});
        } else if (wordCount.length > 0){
            //for each key/value in the array
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count depending on movie
                if (wordCount[j].character === data.character){
                    if (data.episode === 1 ){
                        wordCount[j].episodeOne += data.line.length;
                        break;
                    } else if (data.episode === 2){
                        wordCount[j].episodeTwo += data.line.length;
                        break;
                    } else if (data.episode === 3){
                        wordCount[j].episodeThree += data.line.length;
                        break;
                    }
                    // } else if (data.episode === 4){
                    //     wordCount[j].episodeFour += data.line.length;
                    //     break;
                    // } else if (data.episode === 5){
                    //     wordCount[j].episodeFive += data.line.length;
                    //     break;
                    // } else if (data.episode === 6){
                    //     wordCount[j].episodeSix += data.line.length;
                    //     break;
                    // }   
                } else if (wordCount[j].character !== data.character && j === wordCount.length-1){
                        if (data.episode === 1 ){
                            wordCount.push({character: data.character, episodeOne: data.line.length, episodeTwo: 0, episodeThree: 0});
                            break;
                        } else if (data.episode === 2){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: data.line.length, episodeThree: 0});
                            break;
                        } else if (data.episode === 3){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: data.line.length});
                            break;
                        }
                        // } else if (data.episode === 4){
                        //     wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: data.line.length, episodeFive: 0, episodeSix: 0});
                        //     break;
                        // } else if (data.episode === 5){
                        //     wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: data.line.length, episodeSix: 0});
                        //     break;
                        // } else if (data.episode === 6){
                        //     wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: 0, episodeSix: data.line.length});
                        //     break;
                        // }
                    
                }
            }
        }
    }
    
    function movieTitle(data){
        if (data.movie === 1){
         data.movie = "The Phantom Menace";
        } else if (data.movie === 2){
         data.movie = "Attack of the Clones";
        } else if (data.movie === 3){
         data.movie = "Revenge of the Sith";
        } else if (data.movie === 4){
         data.movie = "A New Hope";
        } else if (data.movie === 5){
         data.movie = "The Empire Strikes Backs";
        } else if (data.movie === 6){
         data.movie = "Return of the Jedi";
        }
     }
    
    //isolating the characters who spoke the most
    theData.forEach(toWord);
    const mostVocal = wordCount.filter(item => item.character === "OBI-WAN" || item.character === "PADMÉ" || item.character === "ANAKIN");
        return(
            <div className="prequels-container">
                {/*<ResponsiveContainer width="100%" height="100%">*/}
                <BarChart
                width={500}
                height={800}
                data={mostVocal}
                //layout="vertical" barCategoryGap={1}
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
                     <Bar dataKey="episodeOne" stackId="a" fill="#FF0707"/>
                     <Bar dataKey="episodeTwo" stackId="a" fill="#FFBB07"/> 
                     <Bar dataKey="episodeThree" stackId="a" fill="FFED07"/>
                    </BarChart>
                {/*</ResponsiveContainer>*/}
            </div>

        )
}
export default Prequels