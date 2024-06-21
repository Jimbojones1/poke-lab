const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(pokemonName) {
  try {
    const response = await fetch(BASE_URL + pokemonName);
    const data = await response.json();

    // make another call here:

    // combine data and speciesData and return it


    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getSpecies(speciesUrl) {
  try {
    const response = await fetch();
    const data = await res.json();
	return data
  } catch (err) {
    console.log(err);
  }
}

export { getPokemon, getSpecies};
