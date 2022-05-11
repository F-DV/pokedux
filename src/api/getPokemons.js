import axionInstance from "./config";

export const getPokemons = (limit = 151) => axionInstance.get(`/pokemon?limit=${limit}`);