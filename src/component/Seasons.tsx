import { ReactElement, ReactNode } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { MdSportsSoccer, TbMusic, IoIosPeople } from 'react-icons/all';

interface FeatureProps {
  title: string;
  text: ReactNode;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'black'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
        >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid gap={150} columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={MdSportsSoccer} w={10} h={10} />}
          title={'Sports'}
          text={
            <Text fontSize={{base :"10px" , md:"10px" ,lg:"20px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...</Text>
          }
        />
        <Feature
          icon={<Icon as={IoIosPeople} w={10} h={10} />}
          title={'Events'}
          text={
            <Text fontSize={{base :"10px" , md:"10px" ,lg:"20px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...</Text>

          }
        />
        <Feature
          icon={<Icon as={TbMusic} w={10} h={10} />}
          title={'Music performances'}
          text={
            <Text fontSize={{base :"10px" , md:"10px" ,lg:"20px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...</Text>

          }
        />
      </SimpleGrid>
    </Box>
  );
}