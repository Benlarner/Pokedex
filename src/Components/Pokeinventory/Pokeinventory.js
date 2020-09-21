import React from 'react';
import './Pokeinventory.scss';
import PokeCard from '../Pokecard/Pokecard';

class PokeInventory extends React.Component{
    render(){
        return(
            <main className = "inventory">
                {this.props.pokemon.map((pokemon, index) => (
                    <PokeCard pokemon = {pokemon} key = {index} />
                ))}
            </main>
        )
    }
}

export default PokeInventory