import { Avatar, Card, Box, Flex } from "@chakra-ui/react";
import { AbsoluteCenter } from "@chakra-ui/react";
import photo from "../assets/my_photo.jpg";

function About() {
  return (
    <Box position="relative" height="100vh">
      <AbsoluteCenter>
        <Card.Root
          width="700px"
          height="500px"
          bg="blackAlpha.800"
          borderColor="black"
          color="white"
        >
          <Card.Body gap="6">
            <Flex gap={6} align="center">
              <Avatar.Root size="2xl" shape="full" flexShrink={0}>
                <Avatar.Image src={photo} />
                <Avatar.Fallback name="Zsófia Demjén-Nagy" />
              </Avatar.Root>

              <Card.Title fontSize="2xl">About me</Card.Title>
            </Flex>
            <Card.Description color="white" textAlign="justify">
              giant flemish hopping blanc de hotot lettuce chocolate creme
              d'argent sable rex californian new zealand english lop dutch bunny
              french cashmere fluffy satin lilac leporidae hare velveteen white
              fuzzy himalayan tortoiseshell jersey wooly plush carrot angora
              rabbit cinnamon opal black mini harlequin palomino cream holland
              lop binky bunny sable fluffy hopping californian velveteen
              palomino lilac cream hare holland lop tortoiseshell opal rex
              lettuce harlequin dutch mini rabbit cashmere himalayan satin
              angora cinnamon flemish creme d'argent blanc de hotot binky white
              plush chocolate leporidae english lop carrot new zealand giant
              black fuzzy jersey wooly french giant leporidae hare mini
              californian white chocolate angora blanc de hotot plush cinnamon
              lettuce english lop rabbit cream holland lop sable hopping opal
              creme d'argent velveteen rex palomino french fuzzy lilac dutch
              binky jersey wooly new zealand bunny tortoiseshell himalayan
              carrot harlequin cashmere satin flemish fluffy black
            </Card.Description>
          </Card.Body>
          <Card.Footer>Skills:</Card.Footer>
        </Card.Root>
      </AbsoluteCenter>
    </Box>
  );
}

export default About;
