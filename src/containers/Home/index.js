import React, {useEffect}from 'react';
import { getPokemons } from '../../api/getPokemons';
import './styles.css';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import { connect } from 'react-redux';
import setPokemonsAction from '../../actions';

const mapStateToProps = (state) => ({
  pokemons: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

function Home({ setPokemons, pokemons }) {
  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.results);
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);