import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { MainLayout } from "../Components/layouts";
import { Pokelist, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <>
      <MainLayout title="Listado de pokemons">
        <ul>
          {pokemons.map((poke) => (
            <li key={poke.id}>{`Id: ${poke.id} -   ${poke.name}`}</li>
          ))}
        </ul>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<Pokelist>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
