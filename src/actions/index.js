import SET_POKEMON from "./type";

const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
})
export default setPokemon;