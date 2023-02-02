import { Box, Heading, Text } from '@chakra-ui/react';
import Activities from './Activities';

function Riyadh() {
  return (
    <Box mx={{ base: 50, md: 150, lg: 250 }} my={{ base: 10, md: 50, lg: 100 }}>
      <Heading pb={5}>Riyadh</Heading>
      <Text fontSize={'xl'}>
        Riyadh is the capital and largest city of Saudi Arabia. The name Riyadh
        is derived from the plural of the Arabic word rawdha, which means
        "garden". It is situated in the center of the Arabian Peninsula and is
        home to 4,854,000 people, and the urban center of a region with a
        population of close to 7 million people.
      </Text>
      <Heading pt={10} as="h1">
        Best activites
      </Heading>
      <Activities
        img={
          'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/08/16/3393071-368926112.jpg?itok=y2351y_b'
        }
        title="Riyadh Boulevard"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/08/16/3393071-368926112.jpg?itok=y2351y_b'
        }
        title="Riyadh Boulevard"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
      <Activities
        img={
          'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/08/16/3393071-368926112.jpg?itok=y2351y_b'
        }
        title="Riyadh Boulevard"
        desc="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Id, cumque sed. Fuga consequatur officia
        sed similique sapiente perferendis dolorum ad perspiciatis libero? Sit
        fuga recusandae mollitia dolor ipsa sapiente quibusdam!"
      />
    </Box>
  );
}

export default Riyadh;
