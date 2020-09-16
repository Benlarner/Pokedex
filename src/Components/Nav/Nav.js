import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import pokeball from '../../assets/images/pokeball.png';
import './Nav.scss';


class Nav extends React.Component{
    render(){
        return(
            <header className="header">
    
                <div className="header__inner">
    
                    <Link to="/" className="header__logo">
                        <img className = "header__pokeball" src={pokeball} alt="Pokeball"/>
                    </Link>
    
                    <nav className="header__nav">
                        <div className="header__list">
                             <NavLink to="/pokedex" className="header__link">
                                Pokedex
                            </NavLink>
                            <NavLink to="/pokelist" className="header__link">
                                Pokelist
                            </NavLink>
                        </div>
                    </nav>
    
                </div>
    
            </header>
        )
    }
}

export default Nav;