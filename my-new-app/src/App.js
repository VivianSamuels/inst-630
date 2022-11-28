import React from 'react'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Prequels from './components/Prequels'
import Force from './components/Force'

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

export default App;
