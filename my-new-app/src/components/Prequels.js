import React from 'react'
import { theData } from '../App'
import './Prequels.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Prequels() {
    //import data from App.js
    const allData = theData;


    //empty array for word count data
    let wordCount = [];
    // wordCount = [
    //     {character: "obi-wan",
    //     episodeOne: 50,
    //     episodeTwo: 100,
    //     episodeThree: 150,
    //     episodeFour: 0,
    //     episodeFive: 0,
    //     episodeSix:0}
    // ]

    const epiOne = allData.filter(item => item.episode === 1);
    const epiTwo = allData.filter(item => item.episode === 2);
    const epiThree = allData.filter(item => item.episode === 3);
    const epiFour = allData.filter(item => item.episode === 4);
    const epiFive = allData.filter(item => item.episode === 5);
    const epiSix = allData.filter(item => item.episode === 6);
    //console.log(epiOne);
    


    // function toWordCount(data){
    //     //if wordCount is empty automatically add data
    //     if (wordCount.length === 0){
    //         wordCount.push({character: data.character, words: data.line.length});
    //     //if wordCount does have data
    //     } else if (wordCount.length > 0){
    //         for (let j = 0; j<wordCount.length; j++){
    //             //when characters match, adjust word count
    //             if (wordCount[j].character === data.character){
    //                 wordCount[j].words += data.line.length;
    //                 //use breack because we're altering the length on each iteration
    //                 break;
    //             }
    //             //if no character matches and reach the end, add a new entry
    //             else if (wordCount[j].character !== data.character && j === wordCount.length-1){
    //                 wordCount.push({character: data.character, words: data.line.length});
    //                 break;
    //             }
    //         }
    //     }
    // }

    function toWordCount(data){
        //if wordCount is empty automatically add data
        if (wordCount.length === 0){
            if (data.episode === 1){
                wordCount.push({character: data.character, episodeOne: data.line.length});
            } else if (data.episode === 2){
                wordCount.push({character: data.character, episodeTwo: data.line.length});
            } else if (data.episode === 3){
                wordCount.push({character: data.character, episodeThree: data.line.length});
            } else if (data.episode === 4){
                wordCount.push({character: data.character, episodeFour: data.line.length});
            } else if (data.episode === 5){
                wordCount.push({character: data.character, episodeFive: data.line.length});
            } else if (data.episode === 6){
                wordCount.push({character: data.character, episodeSix: data.line.length});
            }
        //if wordCount does have data
        } else if (wordCount.length > 0){
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count
                if (wordCount[j].character === data.character){
                    if (data.episode === 1){
                        wordCount.episodeOne += data.line.length;
                        break;
                    } else if (data.episode === 2){
                        wordCount.episodeTwo += data.line.length;
                        break;
                    } else if (data.episode === 3){
                        wordCount.episodeThree += data.line.length;
                        break;
                    } else if (data.episode === 4){
                        wordCount.episodeFour += data.line.length;
                        break;
                    } else if (data.episode === 5){
                        wordCount.episodeFive += data.line.length;
                        break;
                    } else if (data.episode === 6){
                        wordCount.episodeSix += data.line.length;
                        break;
                    }
                }
                //  else if (wordCount[j].character !== data.character && j === wordCount.length-1) {
                //     if (data.episode === 1){
                //         wordCount.push({character: data.character, episodeOne: data.line.length});
                //         break;
                //     } else if (data.episode === 2){
                //         wordCount.push({character: data.character, episodeTwo: data.line.length});
                //         break;
                //     } else if (data.episode === 3){
                //         wordCount.push({character: data.character, episodeThree: data.line.length})
                //         break;
                //     } else if (data.episode === 4){
                //         wordCount.push({character: data.character, episodeFour: data.line.length})
                //         break;
                //     } else if (data.episode === 5){
                //         wordCount.push({character: data.character, episodeFive: data.line.length})
                //         break;
                //     } else if (data.episode === 6){
                //         wordCount.push({character: data.character, episodeSix: data.line.length})
                //         break;
                //     }
                // }
            }
        }
    }


    function toWordOne(data){
        //if the array is empty
        if (wordCount.length === 0){
            //add the very first entry
            wordCount.push({character: data.character, episodeOne: data.line.length});
        } else if (wordCount.length > 0){
            //for each key/value in the array
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count
                if (wordCount[j].character === data.character){
                    wordCount[j].episodeOne += data.line.length;
                    //use breack because we're altering the length on each iteration
                    break;                }
                //if no character matches and reach the end, add a new entry
                else if (wordCount[j].character !== data.character && j === wordCount.length-1){
                    wordCount.push({character: data.character, episodeOne: data.line.length});
                    break;
                }
            }
        }
    }

    function toWord(data){
        //if the array is empty
        if (wordCount.length === 0){
            //add the very first entry
            wordCount.push({character: data.character, episodeOne: data.line.length, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: 0, episodeSix: 0});
        } else if (wordCount.length > 0){
            //for each key/value in the array
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count
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
                    } else if (data.episode === 4){
                        wordCount[j].episodeFour += data.line.length;
                        break;
                    } else if (data.episode === 5){
                        wordCount[j].episodeFive += data.line.length;
                        break;
                    } else if (data.episode === 6){
                        wordCount[j].episodeSix += data.line.length;
                        break;
                    }   
                } else if (wordCount[j].character !== data.character && j === wordCount.length-1){
                        //console.log(data.episode === 1);
                        if (data.episode === 1 ){
                            wordCount.push({character: data.character, episodeOne: data.line.length, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: 0, episodeSix: 0});
                            break;
                        } else if (data.episode === 2){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: data.line.length, episodeThree: 0, episodeFour: 0, episodeFive: 0, episodeSix: 0});
                            break;
                        } else if (data.episode === 3){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: data.line.length, episodeFour: 0, episodeFive: 0, episodeSix: 0});
                            break;
                        } else if (data.episode === 4){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: data.line.length, episodeFive: 0, episodeSix: 0});
                            break;
                        } else if (data.episode === 5){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: data.line.length, episodeSix: 0});
                            break;
                        } else if (data.episode === 6){
                            wordCount.push({character: data.character, episodeOne: 0, episodeTwo: 0, episodeThree: 0, episodeFour: 0, episodeFive: 0, episodeSix: data.line.length});
                            break;
                        }
                    
                }
                //  else if (wordCount[j].character === data.character && data.episode === 2){
                //     wordCount[j].episodeTwo += data.line.length;
                //     break; 
                // //if no character matches and reach the end, add a new entry
                // } else if (wordCount[j].character !== data.character && j === wordCount.length-1 && data.episode === 1){
                //     wordCount.push({character: data.character, episodeOne: data.line.length});
                //     break;
                // }
            }
        }
    }
    
    //isolating the characters who spoke the most
    allData.forEach(toWord);
    //toWord(allData[108]);
    //epiThree.forEach(toWordOne);
    //const mostVocal = wordCount.filter(element => element.words > 300)
   //toWord(epiTwo[70]);
    //console.log(allData[108]);
    // console.log(allData[108].line.length);
    // console.log(epiTwo[70].line.length);
    console.log(wordCount);
    const mostVocal = wordCount.filter(item => item.episodeOne + item.episodeTwo + item.episodeThree + item.episodeFour + item.episodeFive + item.episodeSix > 1000);
        return(
            <div className="prequels-container">
                {/*<ResponsiveContainer width="100%" height="100%">*/}
                <BarChart
                width={1200}
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
                     <Bar dataKey="episodeOne" fill="#FF0707"/>
                     <Bar dataKey="episodeTwo" fill="#FFBB07"/> 
                     <Bar dataKey="episodeThree" fill="FFED07"/>
                     <Bar dataKey="episodeFour" fill="#81FF07"/>
                     <Bar dataKey="episodeFive" fill="#07FFBB"/>
                     <Bar dataKey="episodeSix" fill="#07ACFF"/>
                    </BarChart>
                {/*</ResponsiveContainer>*/}
            </div>

        )
}
export default Prequels