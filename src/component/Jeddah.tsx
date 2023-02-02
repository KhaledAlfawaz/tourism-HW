import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Activities from './Activities';

function Jeddah() {
  return (
    <Box mx={{ base: 50, md: 150, lg: 250 }} my={{ base: 10, md: 50, lg: 100 }}>
      <Heading pb={5}>Jeddah</Heading>
      <Text fontSize={'xl'}>
        Jeddah is a saudi city located in the middle of the eastern coast of the
        red sea known as the Bride of the Red Sea and is considered the economic
        and tourism capital of the country. Its population is estimated around
        3.4 million and it is the second largest city after Riyadh.
      </Text>
      <Heading pt={10} as="h1">
        Best activites
      </Heading>
      <Activities
        img={
          'https://dqliving.com/wp-content/uploads/2022/06/Jeddah-Season-25.jpeg'
        }
        title="Jeddah Pier"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://dqliving.com/wp-content/uploads/2022/06/Jeddah-Season-25.jpeg'
        }
        title="Jeddah Pier"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://dqliving.com/wp-content/uploads/2022/06/Jeddah-Season-25.jpeg'
        }
        title="Jeddah Pier"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
    </Box>
  );
}

export default Jeddah;
