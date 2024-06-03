import { Box, Container, VStack, Text, Image, SimpleGrid, Heading, Link, Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "/images/headphones.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$299",
    image: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Link href="#" color="white">
          <FaShoppingCart size="24px" />
        </Link>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <Text mt={4} fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;