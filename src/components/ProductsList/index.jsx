import { useProducts } from "../../providers/Products";
import Carousel from "nuka-carousel";
import Product from "../Product";

const ProductsList = () => {
  const { products } = useProducts();

  return (
    <Carousel>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          url={product.url}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </Carousel>
  );
};

export default ProductsList;
