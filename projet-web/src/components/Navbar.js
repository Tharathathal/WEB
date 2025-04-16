import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

/* Bar de navigation */
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav class="navbar">
            <div class="navbar-container">
                <Link to='/' className='navbar-logo'>
                    Quarto
                    <i class='fas fa-chess-board' /> 
                </Link>
                {/* Menu rétractable */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link
                        to='/rules'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Règles du jeu
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/players'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Nouvelle partie
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/ranking'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Classement
                    </Link>
                    </li>
                </ul>                
            </div>
        </nav> 
    </>
  )
}

export default Navbar;