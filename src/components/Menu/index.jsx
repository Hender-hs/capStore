import * as S from "./styled";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../providers/Cart";
const Menu = () => {
  const { cart } = useCart();
  return (
    <S.Container>
      <S.Content>
        <ul>
          <li>
            <Link to="/HomeClient">Home</Link>
          </li>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/">Minha Conta</Link>
          </li>
        </ul>
      </S.Content>
      <S.Content>
        <p>Inserir aqui component search</p>
        <S.Cont>{cart.length}</S.Cont>
        <AiOutlineShoppingCart size={30} />
      </S.Content>
    </S.Container>
  );
};

export default Menu;
