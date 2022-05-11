import React, {useEffect}from 'react';
import { getPokemons } from '../../api/getPokemons';
import './styles.css';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import setPokemon from '../../actions';


function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state=> state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemon(res.results));
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default Home;