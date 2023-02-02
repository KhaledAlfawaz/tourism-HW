import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Activities from './Activities';

function Alula() {
  return (
    <Box mx={{ base: 50, md: 150, lg: 250 }} my={{ base: 10, md: 50, lg: 100 }}>
      <Heading pb={5}>AlUla</Heading>
      <Text fontSize={'xl'}>
        AlUla is a place of extraordinary human and natural heritage. We invite
        you to come journey through a living museum of preserved tombs,
        sandstone outcrops, historic dwellings and monuments, both natural and
        human-made, that hold 200,000 years of largely
      </Text>
      <Heading pt={10} as="h1">
        Best activites
      </Heading>
      <Activities
        img={
          'https://www.experiencealula.com/getmedia/ebb4f461-3ed7-4a16-93df-09315ba29c07/alula-Balloons-_781x441?width=781&height=441&ext=.jpg'
        }
        title="Winter Of Tantora"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://www.experiencealula.com/getmedia/ebb4f461-3ed7-4a16-93df-09315ba29c07/alula-Balloons-_781x441?width=781&height=441&ext=.jpg'
        }
        title="Winter Of Tantora"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://www.experiencealula.com/getmedia/ebb4f461-3ed7-4a16-93df-09315ba29c07/alula-Balloons-_781x441?width=781&height=441&ext=.jpg'
        }
        title="Winter Of Tantora"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
    </Box>
  );
}

export default Alula;
