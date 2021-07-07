import * as S from "./styles";

interface Feedback {
  user: string;
  rating: number;
  comment?: string;
  likes?: number;
}

interface ProductProps {
  name: string;
  price: number;
  category?: string;
  id?: number;
  url: string;
  quantity?: number;
  sellerId: number;
  feedback?: Feedback[];
  userType: string;
}

const Product = ({ name, price, quantity, userType }: ProductProps) => {
  return <S.Container></S.Container>;
};

export default Product;
