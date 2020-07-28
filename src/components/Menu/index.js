import React from 'react'
import Logo from '../../assets/img/Logo.png';
import Button from './components/ButtonLink'; // Faz a mesma coisa q o que esta comentado, so que com styled-components
//import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu(){
    
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
            {/*<ButtonLink className="ButtonLink" href="/">        Para fazer usando props
                Novo vídeo
    </ButtonLink>*/}
        </nav>
    )
}

export default Menu;