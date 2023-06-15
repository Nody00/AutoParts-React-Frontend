import HeadingBox from "../components/HeadingBox";
import CardGrid from "../components/CardGrid";
import { useParams } from "react-router-dom";
import { dummyData } from "./HomePage";

const CategoryPage = () => {
  const params = useParams();
  return (
    <>
      <HeadingBox title={params.category.toUpperCase()} />
      <CardGrid products={dummyData} />
    </>
  );
};

export default CategoryPage;
