import React from 'react'
import { theData } from '../App'
import Force from './Force'
import './Words.css';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Prequels() {


    //empty array for word count data
    let wordCount = [];
    
    //move word count data from allData to wordCount
    function toWord(data){
        //if the array is empty
        if (wordCount.length === 0){
            //add the very first entry
            wordCount.push({character: data.character, Phantom_Menace: data.line.length, Attack_Of_The_Clones: 0, Revenge_Of_The_Sith: 0,});
        } else if (wordCount.length > 0){
            //for each key/value in the array
            for (let j = 0; j<wordCount.length; j++){
                //when characters match, adjust word count depending on movie
                if (wordCount[j].character === data.character){
                    if (data.episode === 1 ){
                        wordCount[j].Phantom_Menace += data.line.length;
                        break;
                    } else if (data.episode === 2){
                        wordCount[j].Attack_Of_The_Clones += data.line.length;
                        break;
                    } else if (data.episode === 3){
                        wordCount[j].Revenge_Of_The_Sith += data.line.length;
                        break;
                    }
                } else if (wordCount[j].character !== data.character && j === wordCount.length-1){
                        if (data.episode === 1 ){
                            wordCount.push({character: data.character, Phantom_Menace: data.line.length, Attack_Of_The_Clones: 0, Revenge_Of_The_Sith: 0});
                            break;
                        } else if (data.episode === 2){
                            wordCount.push({character: data.character, Phantom_Menace: 0, Attack_Of_The_Clones: data.line.length, Revenge_Of_The_Sith: 0});
                            break;
                        } else if (data.episode === 3){
                            wordCount.push({character: data.character, Phantom_Menace: 0, Attack_Of_The_Clones: 0, Revenge_Of_The_Sith: data.line.length});
                            break;
                        }
                    
                }
            }
        }
    }
    
    //isolating the characters who spoke the most
    theData.forEach(toWord);
    //const mostVocal = wordCount.filter(item => item.character === "OBI-WAN" || item.character === "PADMÉ" || item.character === "ANAKIN");
    wordCount.sort((a,b) => (b.Phantom_Menace + b.Attack_Of_The_Clones + b.Revenge_Of_The_Sith) - (a.Phantom_Menace + a.Attack_Of_The_Clones + a.Revenge_Of_The_Sith));
    const mostVocal = [];
    for (let i = 0; i < 5; i++){
        mostVocal.push(wordCount[i]);
    }

    const allData = theData;
    let forceCount = [
        {movie: 1, force: 0, Padme:0},
        {movie: 2, force: 0, Padme:0},
        {movie: 3, force: 0, Padme:0}
    ];

    function toForceCount(data) {
        let x = 0;
        if (data.line.includes("force") || data.line.includes("Force")){
            for (let i = 0; i < data.line.length; i++) {
                if (data.line[i] === "force" || data.line[i] === "Force"){
                    x++;
                }
            }
        }
        if (forceCount.length === 0){
            //forceCount.push({character: data.character,force: x})
            forceCount.push({movie: data.epsiode, force:x, Padme: 0})
        } else if (forceCount.length > 0) {
            for (let j = 0; j<forceCount.length; j++) {
                if (data.episode <= 3){
                    //if(forceCount[j].character === data.character){
                    if(forceCount[j].movie === data.episode ){
                        forceCount[j].force += x;
                        break;
                    } else if (forceCount[j].character !== data.character && j === forceCount.length-1) {
                        //forceCount.push({character: data.character, force: x});
                        forceCount.push({movie: data.episode, force: x, Padme: 0});
                        break;
                    }
                }
            }
        }
    }


    function toForce(data) {
        let x = 0;
        let y = 0

        for (let i = 0; i < data.line.length; i++) {
            if (data.line[i] === "force" || data.line[i] === "Force"){
                 x++;
            } else if (data.line[i] === "Padme" || data.line[i] === "padme" || data.line[i] === "PADMÉ" || data.line[i] === "Padmé" || data.line[i] === "Amidala" || data.line[i] === "Queen"){
                y++;
            }
        }

        for (let j = 0; j<forceCount.length; j++) {
            //if(forceCount[j].character === data.character){
                if(forceCount[j].movie === data.episode ){
                    forceCount[j].force += x;
                    forceCount[j].Padme += y;
                    //break;
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
      
  
    allData.forEach(toForce)
    const finalForceCount = forceCount.filter(item => item.force > 0);
    finalForceCount.forEach(movieTitle);






        return(
            <div className="words-container">
                <div className='words-info'>
                    <h1>Chatter Box</h1>
                    <p>On top of her planet being highlighted numerous times, is one of the characters with the most dialogue, second only to Anakin. She doesn’t have grand monologues or placeholder sounds like some other characters either. Her dialogue pushes the plot forward. Her actions in Episode 1 pave the way for the Jedi to find Anakin and she is quite literally the entire plot of Episode 2, with her dodging numerous attempts on her life. Every time Padme speaks, she is revealing something or probing for information necessary to continue the story. Padem is so influential that other characters can’t stop talking about her! She is referenced by other characters more than they use the word “force”, which is a pretty big deal because the Force is the entire magical juju that the entire series relies on.  Only main characters get that kind of treatment.</p>
                </div>

                <div className='all-charts'>
                <div className="word-graph-wrapper">
                    <h2>Characters with the Most Dialogue</h2>
                <BarChart
                width={400}
                height={300}
                data={mostVocal}
                margin={{
                 top: 20,
                 right: 30,
                 left: 20,
                bottom: 5
                 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="character" tick={{ fontSize: 10}}/>
                     <YAxis label={{ value: "number of words spoken", angle: -90, position: 'insideBottomLeft' }}/>
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="Revenge_Of_The_Sith" name="Revenge of the Sith" stackId="a" fill="#892158" barSize={15}/>
                     <Bar dataKey="Attack_Of_The_Clones" name="Attack of the Clones" stackId="a" fill="#F1CA61"/> 
                     <Bar dataKey="Phantom_Menace" name="The Phantom Menace" stackId="a" fill="#F45D3D"/>
                    </BarChart>
                </div>
                <div className='space'></div>
                <div className='force-wrapper'>
                    <h2>Dialogue count: "force" v "Padme"</h2>
                    <LineChart
                width={400}
                height={300}
                data={finalForceCount}
                margin={{
                 top: 5,
                 right: 30,
                 left: 20,
                bottom: 5
                 }}
                >
                     <XAxis dataKey="movie" tick={{ fontSize: 10}} />
                     <YAxis label={{ value: "number of times said", angle: -90, position: 'insideBottomLeft' }}/>
                     <Tooltip />
                     <Legend />
                     <Line type="monotone" dataKey="force" stroke="#145BFF" activeDot={{ r: 8 }}/>
                     <Line type="monotone" dataKey="Padme" stroke="#F45D3D"/>
                    </LineChart>
                </div>
                </div>
                
            </div>

        )
}
export default Prequels