import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({
    name: "",
    imgUrl: "",
  });

  const { pokemonName } = useParams();
  console.log(pokemonName, " <-pokeId from the current url param");

  // we want to make this api call whenever this component loads
  // or when the pokemonName changes!

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await fetch(BASE_URL + pokemonName);
        const data = await response.json();
        console.log(data, " <- data from poke API");

        setPokemon({
          name: data.name,
          imgUrl: data.sprites.front_default,
        });
      } catch (err) {
        console.log(err);
      }
    }

    getPokemon();
  }, [pokemonName]);

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.imgUrl} alt={pokemon.name} />
    </>
  );
}
