import React from 'react'
import Logo from '../images/starWarsLogo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div class="nav-container">
            <nav>
                <div id="logo"><img src={Logo} alt="Star Wars Logo"/> </div>
                    <ul class ="nav-buttons">
                        <li>The Phantom Menance</li>
                        <li>Attack of the Clones</li>
                        <li>Revenger of the Sith</li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar