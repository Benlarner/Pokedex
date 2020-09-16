import axios from 'axios';
import React from 'react';
import './Pokeform.scss';

let URL = "https://pokeapi.co/api/v2/pokemon/";

class Pokeform extends React.Component{

    findPokemon = (e) => {
        e.preventDefault();
        let name = e.target.pokemon.value;
        name = name.toLowerCase();
        if(!name){
            alert('Please enter a Pokemon');
        } else{
            axios.get(URL)
        .then(response => {
            let pokemons = response.data.results;
            let pokemon = pokemons.filter(function(pokemon) {
                return pokemon.name === e.target.pokemon.value;
            })
                console.log(pokemon)
            })

            .catch(error => {
                return error
            })

            e.target.reset();
         }

        
    }


    render(){
        return(
            <section className = "pokeform">
            <h2 className = "pokeform__title">Which Pokemon would you like to learn more about?</h2>
            <form onSubmit={this.findPokemon} className = "pokeform__form">
                <div className = "pokeform__container">
                    <input placeholder="Enter Pokemon" name="pokemon" className = "pokeform__input" type="text"/>
                    <button className = "pokeform__button">Update Pokedex</button>
                </div>
            </form>
        </section>
        )
    }
}

export default Pokeform;