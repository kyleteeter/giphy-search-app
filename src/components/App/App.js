import React from 'react';
import {
  extendTheme,
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import { useState } from "react";
import { Header } from '../Header';

const layout = {
  width: {
    60: '60%'
  },
}

const theme = extendTheme({ layout })


export function App() {
  const [gifs, setGifs] = useState([]);

  const getGifs = (searchValue) => {
    console.log('search', searchValue)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=JVYjg9uDDbG7MnCkRHJkAFb2psQw5kDW&q=${searchValue}&limit=20`)
    .then(response => response.json())
    .then((response) => setGifs(response))
    .then(console.log('gifs', gifs))
  }

  return (
    <ChakraProvider theme={theme}>
        <Header getGifs={getGifs} gifs={gifs} />
    </ChakraProvider>
  );
}

