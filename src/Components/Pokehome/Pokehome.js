import React from 'react';
import './Pokehome.scss';
import Pokeform from '../Pokeform/Pokeform';
import Pokedex from '../Pokedex/Pokedex';



class Pokehome extends React.Component{

    state = {
        selectedPokemon: []
    }

    render(){
        return(
            <main className = "pokehome">
                <Pokeform />
                <Pokedex />
            </main>
        )
    }
}

export default Pokehome;