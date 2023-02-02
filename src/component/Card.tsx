import { Box, Image ,Text} from '@chakra-ui/react';

interface CardProps {
    name:string,
    img:string,
}

export default function Card(props:CardProps) {
  return (
    <Box
    >
      <Box
        w={{base:"300px",md:"xs",xl:"xs"}}
        bg="white"
        _dark={{ bg: 'gray.800' }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={80}
          fit="cover"
          src={props.img}
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Text
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: 'white' }}
            fontWeight="bold"
          >
            {props.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
