import * as S from "./styled";
import { IoMenuOutline, IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
const MenuMobile = () => {
  const [modal, setModal] = useState();
  const { logout } = useAuth();

  const handleclick = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <S.Container>
      <S.Content>
        <button onClick={handleclick}>
          <IoMenuOutline size={30} />
        </button>
        {modal ? (
          <S.Modal>
            <Link to="/">
              <IoPersonCircleOutline />
              <p>Minha Conta</p>
            </Link>
            <Link to="/Dashboard">
              <AiOutlineHome />
            </Link>
            <S.Itens>
              <p>ao invéns de links aqui vai o component da nicole</p>
              <Link>Computadores</Link>
              <Link>Monitores</Link>
              <Link>Hardware</Link>
              <Link>Perifericos</Link>
              <Link>Monte seu pc</Link>
            </S.Itens>
            <button onClick={logout}>
              <GrLogout />
            </button>
          </S.Modal>
        ) : (
          ""
        )}
      </S.Content>
    </S.Container>
  );
};

export default MenuMobile;
