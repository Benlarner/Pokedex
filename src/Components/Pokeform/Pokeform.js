import axios from 'axios';
import React from 'react';
import './Pokeform.scss';




class Pokeform extends React.Component{

    findPokemon = (e) => {
        e.preventDefault();
        let name = e.target.pokemon.value;
        let URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
        name = name.toLowerCase();
        if(!name){
            alert('Please enter a Pokemon');
        } else{
            axios.get(URL)
        .then(response => {
            let pokemon = response.data;
            console.log(pokemon);
            let pokePic = pokemon.sprites.front_shiny;
            let pokeName = pokemon.name;
            let pokeExperience = pokemon.base_experience;
            let pokeWeight = pokemon.weight;
            let pokeHeight = pokemon.height;
            let pokeType1 = pokemon.types[0].type.name;
            let pokeType2 = pokemon.types[1].type.name;

            let newPokemon = {
                img: pokePic,
                name: pokeName,
                types: [pokeType1, pokeType2],
                weight: pokeWeight,
                height: pokeHeight,
                baseExperience: pokeExperience
            }

            console.log(newPokemon);

            this.props.searchPokemon(newPokemon);
                
            })
        
            .catch( error => {
                error = alert('Please enter a valid Pokemon');
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