import './App.css';
import { Box, Flex, Button, Text, Divider } from '@chakra-ui/react';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Riyadh from './component/Riyadh'
import Jeddah from './component/Jeddah'
import Alula from './component/AlUla'
import Carousels from './component/Carousels';
import Card from './component/Card';
import RiyadhCity from './assets/riyadh.jpg';
import JeddahCity from './assets/jeddah.jpg';
import AlUlaCity from './assets/alula.jpg';
import RiyadhLogo from './assets/riyadh-season-logo.png'
import JeddahLogo from './assets/JED_season_logo.png'
import AlUlaLogo from "./assets/alula_logo.jpg";
import Seasons from './component/Seasons';
import Alsoudah from './assets/Alsoudah.png';
import AlsoudahLogo from './assets/AlsoudahLogo.png'

function App() {
  return (
    <Box>
      <Nav />

      {/* I dont know how to do the routing in react.
          if you want to check the other pages comment the code below
          and uncomment the cites one by one.
      */}
      {/*
      <Alula/>
      <Riyadh/>
      <Jeddah/> 
      */}

      <Carousels />
      <Flex
        wrap={'wrap'}
        m={7}
        gap={{ base: 0, md: 0, lg: 0, xl: 460 }}
        flexDirection={'row'}
        justifyContent="space-evenly"
        alignItems={'center'}
      >
        <Text fontSize={'45px'}>Expolre the cities of the Kingdom</Text>
        <Button>View all</Button>
      </Flex>
      <Flex
        wrap={'wrap'}
        gap={50}
        flexDirection={'row'}
        _dark={{ bg: '#3e3e3e' }}
        pb={50}
        w="full"
        justifyContent="center"
      >
        <Card img={RiyadhCity} name="Riyadh" />
        <Card img={JeddahCity} name="Jeddah" />
        <Card img={Alsoudah} name="AlSoudah" />
        <Card img={AlUlaCity} name="AlUla" />
      </Flex>
      <Divider />
      <Box w={'100%'} h={'20%'} p={100} pt={50} bgColor={"gray.100"}  >
      <Seasons/>
      </Box>
      <Flex
        wrap={'wrap'}
        m={7}
        gap={{ base: 0, md: 0, lg: 0, xl: 540 }}
        flexDirection={'row'}
        justifyContent="space-evenly"
        alignItems={'center'}
      >
        <Text fontSize={'45px'}>Experience the Saudi Seasons</Text>
        <Button>View all</Button>
      </Flex>
      <Flex
        wrap={'wrap'}
        gap={50}
        flexDirection={'row'}
        _dark={{ bg: '#3e3e3e' }}
        pb={50}
        w="full"
        justifyContent="center"
      >
        <Card img={RiyadhLogo} name="Riyadh Season" />
        <Card img={JeddahLogo} name="Jeddah Season" />
        <Card img={AlsoudahLogo} name="AlSoudah Season" />
        <Card img={AlUlaLogo} name="AlUla Season" />
      </Flex>
      <Footer />
    </Box>
  );
}

export default App;
