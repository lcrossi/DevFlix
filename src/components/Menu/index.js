import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'; // Faz a mesma coisa q o que esta comentado, so que com styled-components
//import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu(){
    
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DevFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
            {/*<ButtonLink className="ButtonLink" href="/">        Para fazer usando props
                Novo vídeo
    </ButtonLink>*/}
        </nav>
    );
}

export default Menu;