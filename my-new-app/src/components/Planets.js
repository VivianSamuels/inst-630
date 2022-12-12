import React from 'react';
import { theData } from '../App';
import './Planets.css';
import { AreaChart, Area, XAxis, YAxis, ZAxis, PieChart, Pie, Sector, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';



function Planets() {
    
    let data = [
        {planet: "Coruscant", movie1: 0 , movie2: 0, movie3: 0}, 
        {planet: "Geonosis", movie1: 0, movie2: 0, movie3: 0},
        {planet: "Kamino", movie1: 0, movie2: 0, movie3: 0},
        {planet: "Kashyyyk", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Mustafar", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Naboo", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Polis Massa", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Space", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Tatooine", movie1: 0 , movie2: 0, movie3: 0},
        {planet: "Utapau", movie1: 0 , movie2: 0, movie3: 0},
    ]

    for (let i = 0; i < theData.length; i++){
        if (theData[i].episode === 1){
            //if (theData[i].scene.location === "")
            //the scene takes place on Tatooine
            if (theData[i].scene.location === "TATOOINE" || theData[i].scene.location === "MOS ESPA" || theData[i].scene.location.includes("WATTO") || theData[i].scene.location.includes("ANAKIN") || theData[i].scene.location.includes("SLAVE")){
                data[8].movie1++
            } else if (theData[i].scene.location.includes("PALPATINE") || theData[i].scene.location === "CORUSCANT" || theData[i].scene.location.includes("JEDI")){
                data[0].movie1++
            } else if (theData[i].scene.location === "SPACE"){
                data[7].movie1++
            } else {
                //Naboo
                data[5].movie1++
            }
            
        } else if (theData[i].episode === 2){
            if (theData[i].scene.location.includes("CORUSCANT") || theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("CHANCELLOR") || theData[i].scene.location.includes("JEDI") || theData[i].scene.location.includes("NIGHTCLUB") || theData[i].scene.location.includes("ENTERTAINMENT")){
                data[0].movie2++
            } else if (theData[i].scene.location.includes("NABOO") || theData[i].scene.location.includes("THEED") || theData[i].scene.location.includes("PADME") || theData[i].scene.location.includes("NAOO")){
                data[5].movie2++
            } else if (theData[i].scene.location.includes("GEONOSIS") || theData[i].scene.location.includes("GUNSHIP")){
                data[1].movie2++
            } else if (theData[i].scene.location.includes("TATOOINE") || (theData[i].scene.location.includes("TUSKEN"))){
                data[9].movie2++
            } else if (theData[i].scene.location.includes("TIPOCA")){
                data[2].movie2++;
            } else if (theData[i].scene.location.includes("STARFREIGHTER")){
                data[7].movie2++;
            }
        } else if (theData[i].episode === 3){
            if (theData[i].scene.location.includes("CORUSCANT") || theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("JEDI")){
                data[0].movie3++;
            } else if (theData[i].scene.location.includes("UTAPAU")){
                data[9].movie3++; 
            } else if (theData[i].scene.location.includes("KASHYYYK")){
                data[3].movie3++;
            } else if (theData[i].scene.location.includes("MUSTAFAR")){
                data[4].movie3++;
            }  else if (theData[i].scene.location.includes("POLIS")){
                data[6].movie3++;
            } else {
                //space
                data[7].movie3++;
            }             
        } 
    }

    

    return (
     <div  className='planets-container'>
        <div className='location-wrapper'>
            <h2>Where Star Wars took Place</h2>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            <defs>
                <linearGradient id="colorMovie1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#892158" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#892158" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMovie2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F1CA61" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#F1CA61" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMovie3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F45D3D" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#F45D3D" stopOpacity={0}/>
                </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="planet" tick={{ fontSize: 10}} />
          <YAxis label={{ value: "number of actions", angle: -90, position: 'insideLeft' }}/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="movie1" name= "The Phantom Menace" stackId="1" stroke="#892158" fill="#892158" />
          <Area type="monotone" dataKey="movie2" name= "Attack of the Clones" stackId="1" stroke="#F1CA61" fill="#F1CA61" />
          <Area type="monotone" dataKey="movie3" name= "Revenge of the Sith" stackId="1" stroke="#F45D3D" fill="#F45D3D" />
        </AreaChart>
        </div>
        <div className='planet-info'>
            <h1>Naboo or Bust</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

    )
}

export default Planets;