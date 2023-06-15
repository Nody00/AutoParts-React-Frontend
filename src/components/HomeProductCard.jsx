import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Grid,
  Divider,
  ButtonGroup,
  Show,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import DiscountBox from "./DiscountBox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useToast } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const HomeCard = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const toast = useToast();
  async function addProductToCart() {
    // add item to redux cart
    const product = {
      id: props.id,
      title: props.title,
      discount: props.discount,
      discountAmount: props.discountAmount,
      imageUrl: props.imageUrl,
      numCilinders: props.numCilinders,
      capacity: props.capacity,
      power: props.power,
      oil: props.oil,
      price: props.price,
      quantity: 1,
    };

    dispatch(addToCart(product));

    try {
      // no error
      toast({
        title: "Product added",
        description: "View your cart to see all products",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: error.message,
        description: "Item could not be added to your cart.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(error);
    }
  }

  return (
    <Card maxW="sm" position={props.discount ? "relative" : "static"}>
      {props.discount && <DiscountBox amount={props.discountAmount} />}
      <CardBody>
        <Image
          src={props.imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={400}
          h={250}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Text>Number of cilinders: {props.numCilinders}</Text>
          <Text>Engine capacity: {props.capacity}</Text>
          <Text>Engine power: {props.power}</Text>
          <Text>Oil: {props.oil}</Text>
          <Text color="#e03131" fontSize="2xl">
            ${props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="red" onClick={addProductToCart}>
            Add to cart
          </Button>
          <Link as={ReachLink} to={`/product/${props.id}`}>
            <Button variant="ghost" colorScheme="gray">
              View Details
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default HomeCard;
