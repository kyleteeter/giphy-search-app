import React from 'react';
import {
  extendTheme,
  ChakraProvider,
  Box,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaSearch } from 'react-icons/fa';


const layout = {
  width: {
    60: '60%'
  },
}

const theme = extendTheme({ layout })

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<FaSearch color='gray.300' />}
              />
              <Input type='tel' placeholder='Search Gifs' />
            </InputGroup>
          </Stack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

