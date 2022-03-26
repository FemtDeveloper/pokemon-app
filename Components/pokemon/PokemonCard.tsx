import React, { FC } from "react";
import { Card, Row, Text, Grid } from "@nextui-org/react";
import { SinglePokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable onClick={onPokemonClick}>
        <Card.Body css={{ p: 10 }}>
          <Card.Image src={pokemon.image} width="100%" height={140} />
          <Card.Footer css={{ backgroundColor: "Blue" }}>
            <Row justify="space-between">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text># {pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
