import { useHistory } from "react-router";
import { useAuth } from "../../providers/Auth";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { useEffect } from "react";
import { useCart } from "../../providers/Cart";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import Button from "../Button";
import { IoIosNotifications } from "react-icons/io";

const MenuDesktop = ({ setInputValue, needInput, color, bgcolor }) => {
  const history = useHistory();
  const { user, logout, getUserInfo } = useAuth();
  const { cart, setCart } = useCart();
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <S.Container color={color} style={{ backgroundColor: bgcolor }}>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="build-your-pc">Monte Seu PC</Link>
          </li>
          <li>
            <Link to="profile">Meu Perfil</Link>
          </li>

          <li>
            <Link to="wallet">Carteira</Link>
          </li>
          <li>
            <Link to="aboutUs">Sobre Nós</Link>
          </li>
          <li>
            <Link to="all-products">Todos os Produtos</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              logout(history);
              setCart([]);
            }}
          >
            Sair
          </li>
        </ul>
      </nav>
      <div>
        {needInput && (
          <input
            placeholder="Pesquisar"
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}

        <Button width="80px" onClick={() => history.push("/cart")}>
          {user?.type === "client" ? (
            <CartIcon size={25} />
          ) : (
            <IoIosNotifications size={25} color="green" />
          )}
          {cart.length}
        </Button>
      </div>
    </S.Container>
  );
};
export default MenuDesktop;
