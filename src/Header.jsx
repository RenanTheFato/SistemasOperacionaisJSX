import { useState } from 'react'
import './styles/Header.css'

function Header(){

    const logo = './src/assets/logo.png'
    return(
        <header>
            <nav className='navigation'>
                <img className='logo' src={logo} />
                <p className='logoText'>Sistemas <br />Operacionais</p>
                <ul className='itensMenu'>
                    <li><a href='#'>O que é?</a></li>
                    <li><a href='#'>Tipos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header