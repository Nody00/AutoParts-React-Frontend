import { Heading, Grid, Icon } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Box,
  Text,
  StackDivider,
  Flex,
} from "@chakra-ui/react";
import { MdLibraryAdd, MdDelete, MdOutlineUpdate } from "react-icons/md";
import { Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <Grid
      marginTop={0}
      marginBottom={500}
      mr={"auto"}
      ml={"auto"}
      maxWidth={"1100px"}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
      columnGap={5}
    >
      <Link as={ReachLink} to="/addProduct" _hover={{ textDecoration: "none" }}>
        <Card
          _hover={{
            cursor: "pointer",
            bgColor: "gray.200",
            transition: "all 0.2s",
          }}
          pb={10}
        >
          <CardHeader>
            <Heading size="md" textAlign={"center"}>
              Add product
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={MdLibraryAdd} color="#e03131" h={20} w={20} />
            </Flex>
          </CardBody>
        </Card>
      </Link>

      <Link
        as={ReachLink}
        to="/removeProduct"
        _hover={{ textDecoration: "none" }}
      >
        <Card
          _hover={{
            cursor: "pointer",
            bgColor: "gray.200",
            transition: "all 0.2s",
          }}
          pb={10}
        >
          <CardHeader>
            <Heading size="md" textAlign={"center"}>
              Remove product
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={MdDelete} color="#e03131" h={20} w={20} />
            </Flex>
          </CardBody>
        </Card>
      </Link>

      <Link
        as={ReachLink}
        to="/updateProduct"
        _hover={{ textDecoration: "none" }}
      >
        <Card
          _hover={{
            cursor: "pointer",
            bgColor: "gray.200",
            transition: "all 0.2s",
          }}
          pb={10}
        >
          <CardHeader>
            <Heading size="md" textAlign={"center"}>
              Update product
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={MdOutlineUpdate} color="#e03131" h={20} w={20} />
            </Flex>
          </CardBody>
        </Card>
      </Link>
    </Grid>
  );
};

export default AdminPage;
