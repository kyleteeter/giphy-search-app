import {
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  FormControl,
  InputRightElement,
  Button,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Search({ getGifs, clearResults }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputValue("");
    clearResults();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getGifs(inputValue);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
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
        <Stack direction="row" spacing={4} align="center">
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
          <Button
            colorScheme="gray.300"
            variant={inputValue ? "outline" : "solid"}
            onClick={(e) => handleSearch(e)}
          >
            Search
          </Button>
        </Stack>
      </FormControl>
      <ColorModeSwitcher maxW="35%" />
    </Flex>
  );
}
