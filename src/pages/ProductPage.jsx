import { Box, Grid, Heading, Text, Image, Container } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Icon,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BsStar } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import sideBarImg from "../public/mechanic.jpg";
import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const product = useLoaderData();

  return (
    <Grid
      marginTop={0}
      marginBottom={10}
      mr={"auto"}
      ml={"auto"}
      maxWidth={"1100px"}
      gridTemplateColumns={{ base: "1fr", sm: "70fr 30fr" }}
      pr={2}
      pl={2}
    >
      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb={5}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Products</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{product.category}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {/*  */}
        <Heading>{product.title.toUpperCase()}</Heading>
        <Flex
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={2}
          mb={2}
        >
          <Icon as={BsStar} />
          <Icon as={BsStar} />
          <Icon as={BsStar} />
          <Icon as={BsStar} />
          <Icon as={BsStar} />
        </Flex>
        <Text mb={5}>Price: {product.price} $</Text>

        <Box mb={20}>
          <Image
            src="https://vr6parts.com/onlinestore/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/s/dscn91741_resize_3.jpg"
            w={"80%"}
            borderRadius={"12px"}
          />
        </Box>

        <Heading mb={4}>Details</Heading>
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={5}
          fontSize={"1.4rem"}
          mb={10}
        >
          <Text>
            Engine Capacity:{" "}
            <Badge colorScheme="gray" fontSize={"1.2rem"} color={"#000"}>
              {product.capacity} L
            </Badge>
          </Text>
          <Text>
            Engine Oil:{" "}
            <Badge colorScheme="gray" fontSize={"1.2rem"} color={"#000"}>
              {product.oil}
            </Badge>
          </Text>
          <Text>
            Engine Power:{" "}
            <Badge colorScheme="gray" fontSize={"1.2rem"} color={"#000"}>
              {product.power} HP
            </Badge>
          </Text>
          <Text>
            Engine Milage:{" "}
            <Badge colorScheme="gray" fontSize={"1.2rem"} color={"#000"}>
              {product.miles} KM
            </Badge>
          </Text>
          <Text>
            Number of Cilinders:{" "}
            <Badge colorScheme="gray" fontSize={"1.2rem"} color={"#000"}>
              {product.numCilinders}
            </Badge>
          </Text>
        </Flex>

        <Heading mb={5}>Product Description</Heading>
        <Text textAlign={"left"} fontSize={"1.2rem"} maxWidth={"lg"} mb={10}>
          {product.description}
        </Text>

        <Heading>Users also bought</Heading>
        {/* render accesories */}
      </Box>

      <Box>
        <Heading size={"lg"} textAlign={"center"} color={"#e03131"} mb={10}>
          AUTOparts support
        </Heading>

        <Accordion defaultIndex={[0]} allowMultiple mb={10}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Refund Policy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Approved Sellers
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading mb={5}>Or you can contact us at:</Heading>
        <Card mb={5}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Phone number
                </Heading>
                <Text pt="2" fontSize="sm">
                  +38269500144
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email
                </Heading>
                <Text pt="2" fontSize="sm">
                  dinokrcicprof@gmail.com
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Box
          backgroundImage={`url(${sideBarImg})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height={"50%"}
          backgroundSize="cover"
          borderRadius={"12px"}
          position={"relative"}
          zIndex={-1}
        >
          <Flex
            position={"absolute"}
            zIndex={10}
            top={50}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
          >
            <Text color={"#fff"} fontSize={"1.4rem"} textAlign={"center"}>
              You can rely on our expirianced servise personel
            </Text>
            <Button
              padding={"1rem 2rem"}
              cursor={"pointer"}
              colorScheme="gray"
              variant="solid"
            >
              Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductPage;

export async function loader({ params }) {
  try {
    // get individual product form db
    const productId = params.productId;

    const result = await fetch(
      "http://localhost:8080/products/product/" + productId
    );

    const { product } = await result.json();

    return product;
  } catch (error) {
    console.log(error);
  }
}
