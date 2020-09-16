import React from 'react';
import logo from '../../assets/images/logo.png';
import './Homepage.scss';
import {Link} from 'react-router-dom';
import chansey from '../../assets/images/chansey.png';
import charizard from '../../assets/images/charizard.png';

class Homepage extends React.Component{
    render(){
        return(
            <div className = "home">
                <div className = "home__images">
                    <img className = "home__image" src={chansey} alt="Chansey"/>
                    <img className = "home__logo" src={logo} alt="pokemon logo"/>
                    <img className = "home__image" src={charizard} alt="Charizard"/>
                </div>
                <nav className="home__nav">
                        <div className="home__list">
                             <Link to="/pokedex" className="home__link">
                                pokedex
                            </Link>
                            <Link to="/pokelist" className="home__link">
                                pokelist
                            </Link>
                        </div>
                    </nav>
            </div>
            )
    }
   
}

export default Homepage;
