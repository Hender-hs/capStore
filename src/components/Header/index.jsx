import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";

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
          <IoIosNotifications size={30} />
        ) : (
          <S.CartIcon />
        )}
      </S.NavLink>
    </S.Header>
  );
};

export default Header;
