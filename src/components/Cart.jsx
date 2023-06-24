import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  List,
  UnorderedList,
  ListItem,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import CartProductCard from "./CartProductCard";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import { useState } from "react";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const token = useSelector((state) => state.auth.token);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function clearCartHandler() {
    dispatch(clearCart());
  }

  async function buyHandler() {
    setIsLoading(true);
    try {
      const result = await fetch(
        "https://nice-rugby-shirt-newt.cyclic.app/payments/create-checkout-session",
        {
          method: "POST",
          body: JSON.stringify({ cart: cart }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const { url } = await result.json();
      console.log("got url", url);
      setIsLoading(false);
      clearCartHandler();

      window.location.href = url;
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }

  return (
    <Drawer
      isOpen={props.open}
      placement="right"
      onClose={() => {
        props.onClose();
      }}
      size={"md"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody height={"100%"}>
          <List
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            overflowY={"scroll"}
            gap={"2rem"}
            height={"80%"}
            w={"100%"}
          >
            {cart.map((product) => (
              <ListItem w={"100%"} key={product.id}>
                <CartProductCard
                  title={product.title}
                  milage={product.milage}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  id={product.id}
                />
              </ListItem>
            ))}
          </List>
        </DrawerBody>

        <DrawerFooter>
          {!isLoading && (
            <Text mr={2} fontSize={"1.2rem"}>
              Total price: {totalAmount}$
            </Text>
          )}
          {!isLoading && (
            <Button variant="outline" mr={3} onClick={clearCartHandler}>
              Clear all
            </Button>
          )}
          {!isLoading && (
            <Button colorScheme="red" onClick={buyHandler}>
              Order
            </Button>
          )}
          {isLoading && (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
