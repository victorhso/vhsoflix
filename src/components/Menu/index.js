import React from 'react';
import Logo from '../../assets/img/LOGO.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './Components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='vhsoflix logo' />
            </a>

            <Button as ="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;