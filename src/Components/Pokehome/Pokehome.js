import React from 'react';
import './Pokehome.scss';
import Pokeform from '../Pokeform/Pokeform';
import Pokedex from '../Pokedex/Pokedex';



class Pokehome extends React.Component{

    state = {
        selectedPokemon: []
    }

    showPokemon = (pokemon) => {
        let searchedPokemon = this.state.selectedPokemon.concat([pokemon]);
        this.setState({
            selectedPokemon: searchedPokemon[0]
        });
    }

    

    render(){
        return(
            <main className = "pokehome">
                <Pokeform searchPokemon = {this.showPokemon} />
                <Pokedex selectedPokemon = {this.state.selectedPokemon} />
            </main>
        )
    }
}

export default Pokehome;