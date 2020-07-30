import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/LOGO.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './Components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt='vhsoflix logo' />
            </Link>

            <Button as ={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;