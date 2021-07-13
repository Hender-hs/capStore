import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

import * as S from "./styles";

import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";

const Header = () => {
  const { user } = useAuth();
  const { cart } = useCart();

  return (
    <S.Header>
      <GiHamburgerMenu size={30} />
      <S.NavLink to="/cart">
        <S.Items>{cart.length}</S.Items>
        {user?.type === "seller" ? (
          <IoIosNotifications size={35} />
        ) : (
          <AiOutlineShoppingCart size={35} />
        )}
      </S.NavLink>
    </S.Header>
  );
};

export default Header;
