import React from 'react';
import Logo from '../images/starWarsLogo.png';
import './Navbar.css';


function Navbar() {
    return (
        <div className="nav-container">
            <nav>
                <div id="logo"><img src={Logo} alt="Star Wars Logo"/> </div>
                    <ul className ="nav-buttons">
                        <li>The Phantom Menace</li>
                        <li>Attack of the Clones</li>
                        <li>Revenge of the Sith</li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar;