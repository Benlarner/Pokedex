
import React from 'react';
import './Pokelist.scss';
import axios from 'axios';
import PokeInventory from '../Pokeinventory/Pokeinventory';

class Pokelist extends React.Component{

    state = {
        pokeIndex: []
    }

    componentDidMount(){
        
            let URL = 'https://pokeapi.co/api/v2/pokemon';
            axios.get(URL)
            .then(response => {
                let pokemon = response.data.results
                console.log(response.data);
                this.setState({
                    pokeIndex: pokemon
                })
                axios.get(pokemon.url)
                .then(response => {
                    let pokedata = response.data;
                    console.log(pokedata);
                })
            })
            .catch(err => console.log(err));      
    }
   

    render(){
        return(
            <PokeInventory pokemon = {this.state.pokeIndex} />
        )
    }
}

export default Pokelist;