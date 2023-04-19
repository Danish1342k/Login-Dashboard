import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Image,
} from '@chakra-ui/react';

function CardComp(props) {
  return (
    <>
      <Card p="4">
        <CardHeader>
          <Heading size="md">{props.title}</Heading>
        </CardHeader>
        <Image
          src={props.img}
          borderRadius="lg"
          h="200px"
          w="100%"
          objectFit="cover"
        />
        <CardBody>
          <Text>{props.description}</Text>
        </CardBody>

        <CardFooter>
          <Button>{props.button}</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CardComp;
