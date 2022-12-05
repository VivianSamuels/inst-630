import React from 'react'
import Data from './data/script-data.json'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Words from './components/Words'
import Force from './components/Force'
import Planets from './components/Planets'

const theData = cleanData()

function cleanData() {
  let cleanData = [];
  //const prequelData = getData();
  const rawData = Data.scripts;
  //const allData = rawData.filter(item => item.type === "dialogue")
  const allData = rawData.filter(item => item.episode <= 6 && item.type === "dialogue");
  allData.map(data => {
    if (data.line.includes("(")) {
        data.line = data.line.replace(/ *\([^)]*\) */g, "");
        data.line = data.line.split(" ");
        cleanData.push(data);
    } else { data.line = data.line.split(" ");
      cleanData.push(data)}
    })

  return cleanData;
}

function App() {

   return (
    <div className="App">
      <Navbar />
      <Maincontent />
      <Words />
      <Force />
      <Planets />
    </div>

  );
}

export { App as default, theData}