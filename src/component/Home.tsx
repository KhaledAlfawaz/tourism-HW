import React from 'react'
import {
  Box,
  Flex,
  Button,
  Text,
  Divider,
  Heading,
  Center,
} from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "./Footer";
import Riyadh from "./Riyadh";
import Jeddah from "./Jeddah";
import Alula from "./AlUla";
import Carousels from "./Carousels";
import Card from "./Card";
import RiyadhCity from "../assets/riyadh.jpg";
import JeddahCity from "../assets/jeddah.jpg";
import AlUlaCity from "../assets/alula.jpg";
import RiyadhLogo from "../assets/riyadh-season-logo.png";
import JeddahLogo from "../assets/JED_season_logo.png";
import AlUlaLogo from "../assets/alula_logo.jpg";
import Seasons from "./Seasons";
import Alsoudah from "../assets/Alsoudah.png";
import AlsoudahLogo from "../assets/AlsoudahLogo.png";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <Box>
        <Carousels />
        <Flex
          wrap={"wrap"}
          m={7}
          gap={{ base: 0, md: 0, lg: 0, xl: 460 }}
          flexDirection={"row"}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          <Text fontSize={"45px"}>Expolre the cities of the Kingdom</Text>
          <Button>View all</Button>
        </Flex>
        <Flex
          wrap={"wrap"}
          gap={50}
          flexDirection={"row"}
          _dark={{ bg: "#3e3e3e" }}
          pb={50}
          w="full"
          justifyContent="center"
        >
          <Link to={'/Riyadh'}><Card img={RiyadhCity} name="Riyadh" /></Link>
          <Link to={'/Jeddah'}><Card img={JeddahCity} name="Jeddah" /></Link>
          <Card img={Alsoudah} name="AlSoudah" />
          <Link to={'/AlUla'}><Card img={AlUlaCity} name="AlUla" /></Link>
        </Flex>
        <Divider />
        <Box w={"100%"} h={"20%"} p={100} pt={50} bgColor={"gray.100"}>
          <Center>
            <Heading size={"lg"}>Saudi Seasions</Heading>
          </Center>
          <Seasons />
        </Box>
        <Flex
          wrap={"wrap"}
          m={7}
          gap={{ base: 0, md: 0, lg: 0, xl: 540 }}
          flexDirection={"row"}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          <Text fontSize={"45px"}>Experience the Saudi Seasons</Text>
          <Button>View all</Button>
        </Flex>
        <Flex
          wrap={"wrap"}
          gap={50}
          flexDirection={"row"}
          _dark={{ bg: "#3e3e3e" }}
          pb={50}
          w="full"
          justifyContent="center"
        >
          <Card img={RiyadhLogo} name="Riyadh Season" />
          <Card img={JeddahLogo} name="Jeddah Season" />
          <Card img={AlsoudahLogo} name="AlSoudah Season" />
          <Card img={AlUlaLogo} name="AlUla Season" />
        </Flex>
    </Box>
  )
}

export default Home