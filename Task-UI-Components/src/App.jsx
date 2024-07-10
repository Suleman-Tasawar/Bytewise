import React from 'react'
import { Box,Heading ,Text,Button,Image,Flex,Card, CardHeader, CardBody,FormControl,FormLabel, Textarea,Input,Link,Container} from "@chakra-ui/react"
import {
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const App = () => {
  const toast = useToast()
  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Logo
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} >
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 100 2h12a1 1 0 100-2H3zm0 6a1 1 0 110-2h12a1 1 0 110 2H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link href="#" p={2}>
          Home
        </Link>
        <Link href="#" p={2}>
          About
        </Link>
        <Link href="#" p={2}>
          Services
        </Link>
        <Link href="#" p={2}>
          Contact
        </Link>
      </Box>
    </Flex>
    
      <Box>
        <Flex my={10} justify={'center'} >
          <Box w='50%' mt={10} p={5}>
            <Heading as='h1' size='2xl' mt={2}>Look who is here</Heading>
            <Text size = 'xl' mt = {10} color={'grey'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <Text as='b'>Cupiditate</Text>, fuga hic impedit necessitatibus o
              ptio est et adipisci suscipit blanditiis nisi!</Text>
              <Button mt={10} size='lg' variant='outline'>Get it Now</Button>
          </Box>
          <Box boxSize='small'>
              <Image src='https://bit.ly/dan-abramov' alt='random guy' />
          </Box>
        </Flex>
        <Flex>

        </Flex>
        <Flex justify='center'>
          <Card w = "30%">
            <CardHeader>
              <Heading as='h3' size = 'sm'>Basic Plan</Heading>
            </CardHeader>
            <CardBody>
              <Heading as = 'h5' size = 'md' >6mbs Speed</Heading>
              <Text mt={5}>Enjoy streaming videos on youtube or maybe use social media with ease</Text>
              <List spacing={3}mt={5}>
              <ListItem>
                <ListIcon  color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
            </CardBody>
          </Card>
          <Card w = "30%" ml={10}>
            <CardHeader><Heading as='h3' size = 'sm'>Big Data</Heading></CardHeader>
            <CardBody>
              <Heading as = 'h5' size = 'md'>15 mbps speed</Heading>
              <Text mt= {5}>Enjoy live streaming or viewing HD video online</Text>
              <List spacing={3} mt={5}>
              <ListItem>
                <ListIcon  color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
            </CardBody>
          </Card>
          <Card w = "30%" ml={10}>
            <CardHeader><Heading as='h3' size = 'sm'>Elite Data</Heading></CardHeader>
            <CardBody>
              <Heading as = 'h5' size = 'md'>30 mbps speed</Heading>
              <Text mt= {5}>Enjoy live streaming or viewing HD video online,performing data task downloading large games with ease</Text>
              <List spacing={3} mt={5}>
              <ListItem>
                <ListIcon  color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon  color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
            </CardBody>
          </Card>
        </Flex>

          <Container mt = {10}>
            <Heading as = 'h2' size = '2xl'>FAQ Section</Heading>
          </Container>
        <Flex mt={10} justify={'center'}>
              <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Will this hurt my feelings
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Wont i ever be lonely again
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
        </Flex>

        <Flex justify='center' align='center' mt={10} direction='column'>
          <Box>
            <Heading>Contact Us</Heading>
          </Box>
          <Flex justify='center' w = '300px' mt = '5'>

              <form >
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type = "text" placeholder = "Enter your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type = "email" placeholder = "Enter your email id" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder='Enter your detail message here'/>
                </FormControl>
              </form>
          </Flex>
          <Box mt={10}>
            <Button 
            outline='ghost' 
            onClick={() =>
            toast({
          title: 'Message Send.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          containerStyle:{bgColor:'blue',color:'white'}
        })
      }>Contact Me</Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default App
