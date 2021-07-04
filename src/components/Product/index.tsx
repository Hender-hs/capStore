import formatValue from "../../utils/formatValue";

export interface ProductProps {
  title: string;
  price: number;
  url: string;
  quantity: number;
  seller: string;
  priceFormatted: string;
}

const Product = ({
  title,
  price,
  priceFormatted = formatValue(price),
  url,
  seller,
  quantity,
}: ProductProps) => {
  return <div></div>;
};

export default Product;
