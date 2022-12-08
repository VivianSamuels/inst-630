import React from 'react';
import { theData } from '../App';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function Planets() {
    let locations = [];
    let phantomMenace = [{planet: "Coruscant", value: 0}, {planet: "Naboo", value: 0}, {planet: "Space", value: 0}, {planet: "Tatooine", value: 0}]
    let clones = [{planet:"Coruscant" , value: 0}, {planet: "Geonosis" , value: 0}, {planet: "Kamino", value: 0}, {planet: "Nabbo", value: 0}, {planet:"Space", value: 0}, {planet:"Tatooine", value: 0}]
   
    let sith = 
    [{planet: "Coruscant", value: 0}, {planet: "Felucia", value: 0}, 
    {planet: "Kashyyyk", value: 0}, {planet: "Mustafar", value: 0}, 

    {planet: "Mygeeto", value: 0}, {planet: "Polis_Massa", value: 0}, 
    {planet: "Space", value: 0}, {planet: "Utapau", value: 0}]

    let finalLocations = [
        {movie: "The Phantom Menace",
        Coruscant: 0,
        Naboo: 0,
        Space: 0,
        Tatooine: 0,},
        {movie: "Attack of the Clones",
        Coruscant: 0,
        Geonosis: 0,
        Kamino: 0,
        Naboo: 0,
        Space: 0,
        Tatooine: 0},
        {movie: "Revenge of the Sith",
        Coruscant: 0,
        Felucia: 0,
        Kashyyyk: 0,
        Mustafar: 0,
        Mygeeto: 0,
        Naboo: 0,
        Polis_Massa: 0,
        Saleucami: 0,
        Space: 0,
        Tatooine: 0,
        Utapau: 0,}
        ];

    const testing = [{planet: "Naboo", episode1: 411, episode2: 650},
];

    for (let i = 0; i < theData.length; i++){
        if (theData[i].episode === 1){
            //if (theData[i].scene.location === "")
            //the scene takes place on Tatooine
            if (theData[i].scene.location === "TATOOINE" || theData[i].scene.location === "MOS ESPA" || theData[i].scene.location.includes("WATTO") || theData[i].scene.location.includes("ANAKIN") || theData[i].scene.location.includes("SLAVE")){
                finalLocations[0].Tatooine++;
                phantomMenace[3].value++;
            } else if (theData[i].scene.location.includes("PALPATINE") || theData[i].scene.location === "CORUSCANT" || theData[i].scene.location.includes("JEDI")){
                finalLocations[0].Coruscant++;
                phantomMenace[0].value++;
            } else if (theData[i].scene.location === "SPACE"){
                finalLocations[0].Space++;
                phantomMenace[2].value++;
            } else {
                finalLocations[0].Naboo++;
                phantomMenace[1].value++;
            }
            
        } else if (theData[i].episode === 2){
            if (theData[i].scene.location.includes("CORUSCANT") || theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("CHANCELLOR") || theData[i].scene.location.includes("JEDI") || theData[i].scene.location.includes("NIGHTCLUB") || theData[i].scene.location.includes("ENTERTAINMENT")){
                finalLocations[1].Coruscant++;
                clones[0].value++;
            } else if (theData[i].scene.location.includes("NABOO") || theData[i].scene.location.includes("THEED") || theData[i].scene.location.includes("PADME") || theData[i].scene.location.includes("NAOO")){
                finalLocations[1].Naboo++;
                clones[3].value++;
            } else if (theData[i].scene.location.includes("GEONOSIS") || theData[i].scene.location.includes("GUNSHIP")){
                finalLocations[1].Geonosis++;
                clones[1].value++;
            } else if (theData[i].scene.location.includes("TATOOINE") || (theData[i].scene.location.includes("TUSKEN"))){
                finalLocations[1].Tatooine++;
                clones[5].value++;
            } else if (theData[i].scene.location.includes("TIPOCA")){
                finalLocations[1].Kamino++;
                clones[2].value++;
            } else if (theData[i].scene.location.includes("STARFREIGHTER")){
                finalLocations[1].Space++;
                clones[4].value++;
            }
        } else if (theData[i].episode === 3){
            if (theData[i].scene.location.includes("CORUSCANT") || theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("JEDI")){
            //|| theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("CHANCELLOR") || theData[i].scene.location.includes("JEDI") || theData[i].scene.location.includes("NIGHTCLUB") || theData[i].scene.location.includes("ENTERTAINMENT")){
                finalLocations[2].Coruscant++;
                sith[0].value++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("UTAPAU")){
            //|| theData[i].scene.location.includes("THEED") || theData[i].scene.location.includes("PADME") || theData[i].scene.location.includes("NAOO")){
                finalLocations[2].Utapau++;
                sith[7].value++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("MYGEETO")){
            //|| theData[i].scene.location.includes("GUNSHIP")){
                finalLocations[2].Mygeeto++;
                sith[4].value++
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("FELUCIA")){
            //|| (theData[i].scene.location.includes("TUSKEN"))){
                finalLocations[2].Felucia++;
                sith[1].value++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("KASHYYYK")){
                finalLocations[2].Kashyyyk++;
                sith[2].value++
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("MUSTAFAR")){
                finalLocations[2].Mustafar++;
                sith[3].value++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            }  else if (theData[i].scene.location.includes("POLIS")){
                finalLocations[2].Polis_Massa++;
                sith[5].value++
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else {
                finalLocations[2].Space++;
                sith[6].value++
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } 

                // if (!locations.includes(theData[i].scene.location)){
                //     locations.push(theData[i].scene.location)
                // }
            
        } 
    }

    //console.log(finalLocations);
    for (let i = 0; i < theData.length; i++){
        if (theData[i].episode === 3){
                if(!locations.includes(theData[i].scene.location)){
                    //locations.push(theData[i].scene.location);
                console.log(theData[i].scene.location);
                //console.log(theData[i]);
                }            
            
        }
    }

    function getPercent(a){
        let x = 0;
        for (let i = 0; i<a.length; i++){
            x += a[i].value; 
            a.push({total: x});
        }

    }
    
    getPercent(phantomMenace);
    console.log(phantomMenace);
    console.log(phantomMenace[phantomMenace.length-1]);
    //console.log(clones);
    //console.log(sith);
    //console.log(finalLocations);

//    const data = [{planet: "Tatooine", value: 400},{planet: "Naboo", value: 750}, {planet: "Coruscant", value: 250}]
//    console.log(data);
//    //data[0].value = (data[0].value/(data[0].value + data[1].value + data[2].value)) * 100
//     data.push({total: data[0].value + data[1].value + data[2].value})

//    const f = data.map(d => d.value = data[(d.value/(data[0].value + data[1].value + data[2].value)) * 100 )
//   // data[0].value = (data[0].value/(data[0].value + data[1].value + data[2].value + data[3].value)) *100 ));
//     console.log(data);


    return (
      <PieChart width={400} height={400}>
        <Pie
            data={phantomMenace}
            dataKey="value"
            // cx={120}
            // cy={200}
            cx="50%"
            cy="50%"
            //innerRadius={60}
            outerRadius={150}
            fill="#8884d8"
            label
            //paddingAngle={3}
            >

        </Pie>
      </PieChart>
    )
}

export default Planets;