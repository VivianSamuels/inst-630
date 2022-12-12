import React from 'react'
import { theData } from '../App'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Force() {
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
                <LineChart
                width={500}
                height={300}
                data={finalForceCount}
                margin={{
                 top: 5,
                 right: 30,
                 left: 20,
                bottom: 5
                 }}
                >
                     <XAxis dataKey="movie" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Line type="monotone" dataKey="force" fill="#145BFF" activeDot={{ r: 8 }}/>
                     <Line type="monotone" dataKey="Padme" fill="#FF141F"/>
                    </LineChart>
            </div>

        )
}
export default Force