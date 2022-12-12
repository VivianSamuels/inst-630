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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            <div className="padme">
            <img src={Padme} alt="Padme Amidala looking apprehensively at something out of frame"/>    
            </div>
        </div>

    )
}

export default Maincontent;