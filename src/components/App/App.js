import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { Results } from "../Results";
import { Search } from "../Search";

export function App() {
  const [gifs, setGifs] = useState({});

  const getGifs = (searchValue) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=JVYjg9uDDbG7MnCkRHJkAFb2psQw5kDW&q=${searchValue}&limit=20`
    )
      .then((response) => response.json())
      .then((response) => setGifs(response.data));
  };

  const clearResults = () => {
    setGifs({});
  };

  return (
    <ChakraProvider>
      <Search getGifs={getGifs} clearResults={clearResults} />
      {gifs && <Results gifs={gifs} />}
    </ChakraProvider>
  );
}
