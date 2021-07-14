import * as S from "./styled";
import { IoMenuOutline, IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
const MenuMobile = () => {
  const [modal, setModal] = useState();
  const { logout } = useAuth();
  const history = useHistory();
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
            <Link to="/Dashboard">
              <IoPersonCircleOutline />
              <p>Minha Conta</p>
            </Link>
            <Link to="/Home">
              <AiOutlineHome />
            </Link>
            <S.Itens>
              <Link>Computadores</Link>
              <Link>Monitores</Link>
              <Link>Hardware</Link>
              <Link>Perifericos</Link>
              <Link>Monte seu pc</Link>
            </S.Itens>
            <button onClick={() => logout(history)}>
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
