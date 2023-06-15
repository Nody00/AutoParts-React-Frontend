import HomeCard from "./HomeProductCard";
("@chakra-ui/react");
import { Grid } from "@chakra-ui/react";

const CardGrid = (props) => {
  return (
    <Grid
      marginTop={0}
      marginBottom={10}
      mr={"auto"}
      ml={"auto"}
      maxWidth={"1200px"}
      paddingTop={2.5}
      paddingBottom={2.5}
      pl={2}
      pr={2}
      gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
      columnGap={5}
    >
      {props.products.map((product) => (
        <HomeCard
          imageUrl={product.imageUrl}
          title={product.title}
          numCilinders={product.numCilinders}
          capacity={product.capacity}
          power={product.power}
          oil={product.oil}
          price={product.price}
          id={product.id}
          key={product.id}
          discount={product.discount}
          discountAmount={product.discountAmount}
        />
      ))}
    </Grid>
  );
};

export default CardGrid;
