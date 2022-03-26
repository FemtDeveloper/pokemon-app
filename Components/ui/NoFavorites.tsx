import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorites = () => {
  return (
    <Container
      display="flex"
      direction="column"
      css={{
        height: "calc(100vh-100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay pokemons</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="pokemon image"
        width={250}
        height={250}
        css={{ opacity: 0.4 }}
      />
    </Container>
  );
};
