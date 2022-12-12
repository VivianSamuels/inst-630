import React from "react";
import './Maincontent.css';
import Background from '../images/space.png';
import Clones from '../images/AttackClones.jpg';
import Phantom from '../images/PhantomMenance.jpg';
import Sith from '../images/RevengeSith.jpg';
import Padme from '../images/Padme.png'

function Maincontent () {
    return (
        <div className="main-container">
            <div className="main-info">
            <h1>Who is Padme?</h1>
            <p>Padme Amidala is the main character of th Star War Prequels. Here's why!</p>
                </div>
            <div className="padme">
            <img src={Padme} alt="Padme Amidala looking apprehensively at something out of frame"/>    
            </div>
        </div>

    )
}

export default Maincontent;