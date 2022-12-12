import React from 'react';
import { theData } from '../App';
import './Appear.css'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Legend } from 'recharts';

function Appear() {
    //console.log(theData[15]);

    let apObi = [];
    let apAna = []; 
    let apPad = [];

    let apObi2 = [];
    let apAna2 = []; 
    let apPad2 = [];

    let apObi3= [];
    let apAna3 = []; 
    let apPad3 = [];
     
    function appearanceCounter(data){
        if (data.episode === 1){
            if (data.character === "OBI-WAN"){
                apObi.push({appear: data.i, y:1});
                apAna.push({appear: data.i});
                apPad.push({appear: data.i});
            } else if (data.character === "ANAKIN"){
                apObi.push({appear: data.i});
                apAna.push({appear: data.i, y:0});
                apPad.push({appear: data.i});
            } else if (data.character === "PADMÉ"){
                apObi.push({appear: data.i});
                apAna.push({appear: data.i});
                apPad.push({appear: data.i, y:2});
            } else {
                apObi.push({appear: data.i});
                apAna.push({appear: data.i});
                apPad.push({appear: data.i});
            }
        } else if (data.episode === 2){
          if (data.character === "OBI-WAN"){
              apObi2.push({appear: data.i-1833, y:1});
              apAna2.push({appear: data.i-1833});
              apPad2.push({appear: data.i-1833});
          } else if (data.character === "ANAKIN"){
              apObi2.push({appear: data.i-1833});
              apAna2.push({appear: data.i-1833, y:0});
              apPad2.push({appear: data.i-1833});
          } else if (data.character === "PADMÉ"){
              apObi2.push({appear: data.i-1833});
              apAna2.push({appear: data.i-1833});
              apPad2.push({appear: data.i-1833, y:2});
          } else {
              apObi2.push({appear: data.i-1833});
              apAna2.push({appear: data.i-1833});
              apPad2.push({appear: data.i-1833});
          }
      } else if (data.episode === 3){
        if (data.character === "OBI-WAN"){
            apObi3.push({appear: data.i-7745, y:1});
            apAna3.push({appear: data.i-7745});
            apPad3.push({appear: data.i-7745});
        } else if (data.character === "ANAKIN"){
            apObi3.push({appear: data.i-7745});
            apAna3.push({appear: data.i-7745, y:0});
            apPad3.push({appear: data.i-7745});
        } else if (data.character === "PADMÉ"){
            apObi3.push({appear: data.i-7745});
            apAna3.push({appear: data.i-7745});
            apPad3.push({appear: data.i-7745, y:2});
        } else {
            apObi3.push({appear: data.i-7745});
            apAna3.push({appear: data.i-7745});
            apPad3.push({appear: data.i-7745});
        }
    }
    }
    theData.forEach(appearanceCounter);

   

    return (
        <div className="appear-container">
          <div className='appear-text'>
                <h1>Screen Time</h1>
                <p>Padme is once again carrying Star Wars on her back. She is all over most of the movies. Her screen presence is hard to ignore and always used to develop the story. She has one of the highest screen times and always seems to pop up during major plot points. In fact, in Episode 3, where she has less screen time than other movies, she is used prominently in flashbacks and as images of the future that are not accounted for in the script (since she isn’t actually talking during those moments). Visions of Padme’s pregnancy is literally the reason why Anakin goes super emo and becomes Darth Vader. Needless to say, she is both an iconic character and the main character</p>
                </div>
          <div className="appear-charts"> 
          <h2>Appearance in Script</h2>
          <div id="episode1">            
            <ScatterChart
          width={600}
          height={100}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 20,
          }}
          legend
        >
          <CartesianGrid />
          <XAxis type="number" name="Line where character appears" dataKey="appear" interval={0} 
          tick={false} tickLine={false} />
          <YAxis type="number" name="Script Appearance" dataKey="y" height={5} width={80} 
          tick={false} tickline={false} 
          axisLine={false} label={{ value: 'Episode 1', position: 'insideRight' }} />
          {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
          <Scatter data={apAna} name= "Anakin" fill="#F1CA61" shape="rectangle" />
          <Scatter data={apObi} name="Obi-Wan" fill="#892158" shape="rectangle" />
          <Scatter data={apPad} name= "Padme" fill="#F45D3D" shape="rectangle" />
        </ScatterChart>
        </div>

        <div id="episode2">
        <ScatterChart
          width={600}
          height={100}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 20,
          }}
          legend
        >
          <CartesianGrid />
          <XAxis type="number" name="Line where character appears" dataKey="appear" interval={0} 
          tick={false} tickLine={false} />
          <YAxis type="number" name="Script Appearance" dataKey="y" height={5} width={80} 
          tick={false} tickline={false} axisLine={false} label={{ value: 'Episode 2' , position: 'insideRight' }} />
          {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
          <Scatter data={apAna2} name= "Anakin" fill="#F1CA61" shape="rectangle" />
          <Scatter data={apObi2} name="Obi-Wan" fill="#892158" shape="rectangle" />
          <Scatter data={apPad2} name= "Padme" fill="#F45D3D" shape="rectangle" />
        </ScatterChart>
        </div>

        <div id="episode3">
        <ScatterChart
          width={600}
          height={100}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 20,
          }}
          legend
        >
          <CartesianGrid />
          <Legend />
          <XAxis type="number" name="Line where character appears" dataKey="appear" interval={0} 
          tick={false} tickLine={false} />
          <YAxis type="number" name="Script Appearance" dataKey="y" height={5} width={80} 
          tick={false} tickline={false} axisLine={false} label={{ value: 'Episode 3', position: 'insideRight' }} />
          {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
          <Scatter data={apAna3} name= "Anakin" fill="#F1CA61" shape="rectangle" />
          <Scatter data={apObi3} name="Obi-Wan" fill="#892158" shape="rectangle" />
          <Scatter data={apPad3} name= "Padme" fill="#F45D3D" shape="rectangle" />
        </ScatterChart>
        </div>
        
        </div>
        </div>
    )
}

export default Appear;