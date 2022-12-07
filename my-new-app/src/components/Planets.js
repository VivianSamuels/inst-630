import React from 'react';
import { theData } from '../App';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function Planets() {
    let locations = [];
    let finalLocations = [
        {movie: "The Phantom Menace",
        Corsusant: 0,
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
        Geonosis: 0,
        Kamino: 0,
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
                finalLocations[0].Tatooine++ ;
            } else if (theData[i].scene.location.includes("PALPATINE") || theData[i].scene.location === "CORUSCANT" || theData[i].scene.location.includes("JEDI")){
                finalLocations[0].Corsusant++;
            } else if (theData[i].scene.location === "SPACE"){
                finalLocations[0].Space++;
            } else {
                finalLocations[0].Naboo++;
            }
            
        } else if (theData[i].episode === 2){
            if (theData[i].scene.location.includes("CORUSCANT") || theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("CHANCELLOR") || theData[i].scene.location.includes("JEDI") || theData[i].scene.location.includes("NIGHTCLUB") || theData[i].scene.location.includes("ENTERTAINMENT")){
                finalLocations[1].Coruscant++;
            } else if (theData[i].scene.location.includes("NABOO") || theData[i].scene.location.includes("THEED") || theData[i].scene.location.includes("PADME") || theData[i].scene.location.includes("NAOO")){
                finalLocations[1].Naboo++;
            } else if (theData[i].scene.location.includes("GEONOSIS") || theData[i].scene.location.includes("GUNSHIP")){
                finalLocations[1].Geonosis++;
            } else if (theData[i].scene.location.includes("TATOOINE") || (theData[i].scene.location.includes("TUSKEN"))){
                finalLocations[1].Tatooine++;
            } else if (theData[i].scene.location.includes("TIPOCA")){
                finalLocations[1].Kamino++;
            } else if (theData[i].scene.location.includes("STARFREIGHTER")){
                finalLocations[1].Space++;
            }
        } else if (theData[i].episode === 3){
            if (theData[i].scene.location.includes("CORUSCANT")){
            //|| theData[i].scene.location.includes("SENATE") || theData[i].scene.location.includes("CHANCELLOR") || theData[i].scene.location.includes("JEDI") || theData[i].scene.location.includes("NIGHTCLUB") || theData[i].scene.location.includes("ENTERTAINMENT")){
                finalLocations[2].Coruscant++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("UTAPAU")){
            //|| theData[i].scene.location.includes("THEED") || theData[i].scene.location.includes("PADME") || theData[i].scene.location.includes("NAOO")){
                finalLocations[2].Utapau++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("MYGEETO")){
            //|| theData[i].scene.location.includes("GUNSHIP")){
                finalLocations[2].Mygeeto++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("FELUCIA")){
            //|| (theData[i].scene.location.includes("TUSKEN"))){
                finalLocations[2].Felucia++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("SALEUCAMI")){
                finalLocations[2].Saleucami++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("KASHYYYK")){
                finalLocations[2].Kashyyyk++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("MUSTAFAR")){
                finalLocations[2].Mustafar++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            }  else if (theData[i].scene.location.includes("POLIS")){
                finalLocations[2].Polis_Massa++;
                if (!locations.includes(theData[i].scene.location)){
                    locations.push(theData[i].scene.location)
                }
            } else if (theData[i].scene.location.includes("TRADE")){
                console.log(theData[i]);
                // if (!locations.includes(theData[i].scene.location)){
                //     locations.push(theData[i].scene.location)
                // }
            }
        } 
    }

    //console.log(finalLocations);
    // for (let i = 0; i < theData.length; i++){
    //     if (theData[i].episode === 3){
    //             if(!locations.includes(theData[i].scene.location)){
    //                 //locations.push(theData[i].scene.location);
    //             console.log(theData[i].scene.location);
    //             }            
            
    //     }
    // }
    //console.log(finalLocations);

    return (
      <PieChart width={800} height={400} onMouseEnter ={this.onPieEnter}>
        <Pie
            data={finalLocations}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey>

        </Pie>
      </PieChart>
    )
}

export default Planets;