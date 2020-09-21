import React from 'react';
import './Pokecard.scss';

class PokeCard extends React.Component{
    render(){
        return(
            <div className = 'card'>
                <h1>{this.props.pokemon.name}</h1>
            </div>
        )
    }
}

export default PokeCard;
