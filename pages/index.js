import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoAppleAppstore
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            jin jin jinjin jin jinjin jin jinjin jin jinjin jin jinjin jin jin
          </Heading>
          <p>yofacts.</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          section uno
        </Heading>
        <Paragraph>
          among us{' '}
          <NextLink href="/amongus">
            <Link>dsa </Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/amongus">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              dawgo
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Linkssection🤓
        </Heading>
        <List>
          <ListItem>
            <Link href="https://google.com/true" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<Icon as={IoLogoAppleAppstore} />}
              >
                DAS
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/amongus">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Pds
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
