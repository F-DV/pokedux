import React from 'react';
import PokemonCard from './PokemonCard.js';
import {Grid} from 'semantic-ui-react';

const PokemonList = ({pokemons}) => {
    return (
        <Grid className='PokemonList'>
            {pokemons.map((pokemon,index) => {
                return <PokemonCard pokemon={pokemon} key={index}/>
        })}
        </Grid>
      );
};
 
export default PokemonList;