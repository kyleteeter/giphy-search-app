import { SimpleGrid} from "@chakra-ui/react";

export function Results({gifs}) {
  return (
    <SimpleGrid columns={2} spacing={10}>
        {Object.values(gifs).forEach(gif => console.log(gif))}
    </SimpleGrid>
  )
}
