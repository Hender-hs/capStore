import { useEffect } from "react";
import { useAuth } from "../providers/Auth";
import { useProducts } from "../providers/Products";
import MenuDesktop from "./MenuDesktop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Styleguide = () => {
  const { user, getUserInfo } = useAuth();
  const { products } = useProducts();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Carousel responsive={responsive}>
        {products
          .filter((item) => item.category === "Placa-mãe")
          .map((item) => (
            <p>{item.name}</p>
          ))}
      </Carousel>
      <Carousel responsive={responsive}>
        {products
          .filter((item) => item.category === "Placa-mãe")
          .map((item) => (
            <p>{item.name}</p>
          ))}
      </Carousel>
    </div>
  );
};

export default Styleguide;
