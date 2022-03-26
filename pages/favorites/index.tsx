import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { MainLayout } from "../../Components/layouts";
import { NoFavorites } from "../../Components/ui";
import { useLayoutEffect, useState } from "react";
import { localStorageFavorites } from "../../utils";
import { FavoritePokemons } from "../../Components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useLayoutEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Favorites Pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
