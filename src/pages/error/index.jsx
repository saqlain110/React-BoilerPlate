import { Link, useRouteError } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.warn("Unhandled Error Occurred! ", error);
  return (
    <Flex id="error-page" h="100vh" justify="center" align="center">
      <Box>
        {/* <Image src={APP_IMAGES.ERROR} /> */}
      </Box>
      <Box>
        <Heading>Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>{error.statusText || error.message}</Text>
        <HStack spacing={5} mt={5}>
          <Button>
            <Link to="/admin">Back To Homepage</Link>
          </Button>

          <Button onClick={() => window.location.reload()}>Reload Page</Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
