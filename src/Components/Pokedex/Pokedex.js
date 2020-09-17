import React from 'react';
import './Pokedex.scss';

class Pokedex extends React.Component{

    
    render(){
    
        return(
            <section className = "pokedex">
                <div className = "pokedex__container">
                    <div className = "pokedex__inner">
                    <img className = "pokedex__image" src={this.props.selectedPokemon.img} alt ={this.props.selectedPokemon.img}/>
                        <div className = "pokedex__info">
                            <h1 className = "pokedex__name">{this.props.selectedPokemon.name}</h1>
                            <p className = "pokedex__height">{this.props.selectedPokemon.height}</p>
                            <p className = "pokedex__weight">{this.props.selectedPokemon.weight}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Pokedex;