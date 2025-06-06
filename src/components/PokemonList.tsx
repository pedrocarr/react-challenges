import useFetch from "../custom-hooks/useFetch";

type Pokemon = {
  name: string;
};

const PokemonList = () => {
  const { data, isLoading, error } = useFetch<{ results: Pokemon[] }>(
    `https://pokeapi.co/api/v2/pokemon?${new URLSearchParams({
      limit: "10",
      offset: "0",
    })}`
  );
  const pokemons = data?.results || [];

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error occurred</p>;
  }

  return (
    <ol>
      {pokemons.map((pokemon: Pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ol>
  );
};

export default PokemonList;