import * as S from "./styles";
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { IoWalletOutline as WalletIcon } from "react-icons/io5";
import ProfileData from "../../components/ProfileData";
import { useEffect } from "react";
import formatValue from "../../utils/formatValue";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";

const Profile = () => {
  const { token, getUserInfo, user } = useAuth();

  const history = useHistory();

  if (!token) history.push("/");

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <S.Container>
        <Header />
        {user && (
          <S.Body>
            <S.Div>
              <S.LeftDiv>
                <UserIcon size="200px" />
                <h3>{user.name}</h3>
                <h3>{user.location}</h3>
                {user.type !== "client" && (
                  <S.Wallet>
                    <WalletIcon size="100px" />
                    <h4>{formatValue(user.cash || 0)}</h4>
                  </S.Wallet>
                )}
              </S.LeftDiv>
              <S.RightDiv>
                <ProfileData data={user} products={user.products || []} />
              </S.RightDiv>
            </S.Div>
          </S.Body>
        )}
      </S.Container>
    </>
  );
};

export default Profile;
