import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404: Not found</Heading>
      <Text>idk what u did but this is not a valid page. return home</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
export { getInitialProps } from '../components/chakra'
