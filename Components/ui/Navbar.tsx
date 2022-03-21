import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme?.colors.gray700.value,
        padding: "0 20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        width={70}
        height={70}
        alt="Icono Pokemon"
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        ókemon
      </Text>
      <Spacer css={{ flex: "1" }} />
      <Text color="white" h3>
        Favoritos
      </Text>
    </div>
  );
};
