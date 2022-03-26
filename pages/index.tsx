import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { MainLayout } from "../Components/layouts";
import { PokemonCard } from "../Components/pokemon";
import { Pokelist, SinglePokemon } from "../interfaces";

interface Props {
  pokemons: SinglePokemon[];
}

const PokemonPage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<Pokelist>("/pokemon?limit=151");

  const pokemons: SinglePokemon[] = data.results.map((poke, i) => ({
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

export default PokemonPage;
