import { Box, Image } from "@chakra-ui/react";

export function Results({ gifs }) {
  return (
    <Box
      padding={10}
      w="100%"
      mx="auto"
      sx={{ columnCount: [1, 2, 3, 4, 5], gap: "8px" }}
    >
      {Object.values(gifs).map((gif) => {
        const stillImage = gif.images["fixed_width_still"].url;
        const loopGif = gif.images["fixed_width"].url;
        return (
          <Box key={gif.id}>
            <Image
              w="100%"
              borderRadius="md"
              mb={2}
              d="inline-block"
              src={stillImage}
              onMouseOver={(e) => {
                e.currentTarget.src = loopGif;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = stillImage;
              }}
              alt={gif.images.title}
            />
          </Box>
        );
      })}
    </Box>
  );
}
