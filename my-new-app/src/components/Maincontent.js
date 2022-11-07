import React from "react";
import './Maincontent.css';
import Background from '../images/space.png';
import Clones from '../images/AttackClones.jpg';
import Phantom from '../images/PhantomMenance.jpg';
import Sith from '../images/RevengeSith.jpg';

function Maincontent () {
    return (
        <div className="main-container">
            <div id="background"><img src={Background} alt="stars in a night sky" id="bg-image"/></div>

            <div className="movie1">
                <img src={Phantom} alt="Phantom Menance movie poster"/>
            </div>

            <div className="movie2">
                <img src={Clones} alt="Attack of the Clones movie poster"/>
            </div>
            
            <div className="movie3">
                <img src={Sith} alt="Revenge of the Sith movie poster"/>
            </div>
        </div>

    )
}

export default Maincontent;