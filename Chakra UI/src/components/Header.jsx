import * as React from "react";
import { ChakraProvider, Box, Button, Heading } from "@chakra-ui/react";

import backgroundImage from "../images/img.jpg"

function Header() {
  return (
    <ChakraProvider>
      <Box
        bgImage={`url(${backgroundImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="200px"
        opacity={0.8}
        px={10}
        py={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin={5}
      >
        <Heading alingItems="center" mb={3} color="white">
          DOMINA EL TERRENO
        </Heading>
        <Box display="flex" justifyContent="center">
          <Button            
            colorScheme="whiteAlpha"
            variant="outline"
            mr={3}
          >
            VER DETALLES
          </Button>
          <Button            
            colorScheme="whiteAlpha"
            variant="outline"
          >
            VER VIDEO
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Header;
