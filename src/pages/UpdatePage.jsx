import { Box, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import AddProduct from "./AddProduct";
const UpdatePage = () => {
  const { product } = useLoaderData();

  return <AddProduct isUpdateMode={true} product={product} />;
};

export default UpdatePage;

export async function loader({ params }) {
  const productId = params.productId;

  try {
    const result = await fetch(
      "http://localhost:8080/products/product/" + productId
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
