import React from 'react'
import Data from './data/script-data.json'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Prequels from './components/Prequels'
import Force from './components/Force'

//const aData = getData()

const theData = cleanData()
function getData() {

  const rawData = Data.scripts;
  const allData = rawData.filter(item => item.episode <= 3 && item.type === "dialogue");

  return allData;
}

function cleanData() {
  let cleanData = [];
  const prequelData = getData();
  const freshData = prequelData.map(data => {
    if (data.line.includes("(")) {
        data.line = data.line.replace(/ *\([^)]*\) */g, "");
        data.line = data.line.split(" ");
        cleanData.push(data);
    } else { data.line = data.line.split(" ");
      cleanData.push(data)}

    //return data;
})

  return cleanData;
}

function App() {

   return (
    <div className="App">
      <Navbar />
      <Maincontent />
      <Prequels />
      <Force />
    </div>

  );
}

export { App as default, theData}