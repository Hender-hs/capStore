import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { useHistory } from "react-router";
import * as S from "./styles";

import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import { Link } from "react-router-dom";

const Header = ({ color = "white" }) => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [openToggleMenu, setOpenToggleMenu] = useState(false);
  const history = useHistory();
  return (
    <>
      {color === "white" && (
        <S.Header color={color}>
          <GiHamburgerMenu
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => setOpenToggleMenu(!openToggleMenu)}
          />
          <S.NavLink to="/cart">
            <S.Items>{cart.length}</S.Items>
            {user?.type === "seller" ? (
              <IoIosNotifications size={35} />
            ) : (
              <AiOutlineShoppingCart size={35} />
            )}
          </S.NavLink>
        </S.Header>
      )}
      {color !== "white" && (
        <S.Header color={color}>
          <GiHamburgerMenu
            size={30}
            color="white"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenToggleMenu(!openToggleMenu)}
          />
          <S.NavLink to="/cart">
            <S.Items>{cart.length}</S.Items>
            {user?.type === "seller" ? (
              <IoIosNotifications size={35} color="white" />
            ) : (
              <AiOutlineShoppingCart size={35} color="white" />
            )}
          </S.NavLink>
        </S.Header>
      )}
      <S.BackgroundModal openToggleMenu={openToggleMenu}>
        <S.ToggleMenu openToggleMenu={openToggleMenu}>
          <div className="first-child">
            <GiHamburgerMenu
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => setOpenToggleMenu(!openToggleMenu)}
            />
          </div>
          <div className="second-child">
            <UserIcon
              size="100"
              style={{ visibility: openToggleMenu ? "visible" : "hidden" }}
            />
          </div>
          <div className="third-child">
            <S.ToggleMenuLink to="home">Home</S.ToggleMenuLink>
            <S.ToggleMenuLink to="build-your-pc">Monte Seu PC</S.ToggleMenuLink>
            <S.ToggleMenuLink to="profile">Meu Perfil</S.ToggleMenuLink>
            <S.ToggleMenuLink to="wallet">Carteira</S.ToggleMenuLink>
            <S.ToggleMenuLink to="aboutUs">Sobre Nós</S.ToggleMenuLink>
            <S.ToggleMenuLink onClick={() => logout(history)}>
              Sair
            </S.ToggleMenuLink>
          </div>
        </S.ToggleMenu>
      </S.BackgroundModal>
    </>
  );
};

export default Header;
