import React from "react";
import {
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";


export function Header({ getGifs, gifs }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    alert(inputValue)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGifs(inputValue);
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        console.log("search", inputValue);
        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Flex justifyContent={"space-between"} minH='100vh' p={3}>
      <Text fontFamily={"heading"} fontSize='2xl'>
        Giphy App
      </Text>
      <InputGroup maxW='60%'>
        <InputLeftElement
          pointerEvents='none'
          children={<FaSearch color='gray.300' />}
        />
        <Input
          type='text'
          placeholder='Search Gifs'
          value={inputValue}
          onChange={handleChange}
        />
      </InputGroup>
      <ColorModeSwitcher maxW='35%' />
    </Flex>
  );
}
