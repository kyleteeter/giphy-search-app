import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export function Results({ gifs }) {
  return (
    <Box
      padding={10}
      w="100%"
      mx="auto"
      bg="gray.800"
      sx={{ columnCount: [1, 2, 3, 4, 5], gap: "8px" }}
    >
      {Object.values(gifs).map((gif) => {
        return (
          <Image
            key={gif.images.id}
            w="100%"
            borderRadius="xl"
            mb={2}
            d="inline-block"
            src={gif.images["original"].url}
            alt={gif.images.title}
          />
        );
      })}
    </Box>
  );
}
