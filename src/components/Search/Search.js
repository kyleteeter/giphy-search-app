import {
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Search({ getGifs, clearResults }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInputValue("");
    clearResults();
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        getGifs(inputValue);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [getGifs, inputValue]);

  return (
    <Flex justifyContent={"space-between"} p={3}>
      <Text fontFamily={"heading"} fontSize="2xl">
        Giphy App
      </Text>
      <FormControl maxW="60%">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search Gifs"
            value={inputValue}
            onChange={handleChange}
          />
          {inputValue.length ? (
            <InputRightElement
              children={<FaTimes color="gray.300" />}
              onClick={handleReset}
            ></InputRightElement>
          ) : (
            ""
          )}
        </InputGroup>
      </FormControl>
      <ColorModeSwitcher maxW="35%" />
    </Flex>
  );
}
