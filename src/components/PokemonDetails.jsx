
import { useParams } from "react-router-dom"

export default function PokemonDetail({pokemon}){

	const { pokeId } = useParams()
	console.log(pokeId, ' <-pokeId from the current url param')


	// returning the pokemon object that matches the comparison
	const singlePokemon = pokemon.find((poke) => poke._id === Number(pokeId))

	return (
		<>
		<h2>{singlePokemon.name}</h2>
		<dl>
			<dt>Weight:</dt>
			<dd>{singlePokemon.weight}</dd>
			<dt>Height:</dt>
			<dd>{singlePokemon.height}</dd>
		</dl>
		</>
	)
}