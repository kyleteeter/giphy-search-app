import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../Header";

const layout = {
  width: {
    60: "60%",
  },
};

const theme = extendTheme({ layout });

export function App() {
  const [gifs, setGifs] = useState({});

  const getGifs = (searchValue) => {
    console.log("search input", searchValue);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=JVYjg9uDDbG7MnCkRHJkAFb2psQw5kDW&q=${searchValue}&limit=20`
    )
      .then((response) => response.json())
      .then((data) => setGifs(data));
  };

  const clearResults = () => {
    setGifs({});
  }

  return (
    <ChakraProvider theme={theme}>
      <Header getGifs={getGifs} gifs={gifs} clearResults={clearResults} />
    </ChakraProvider>
  );
}
