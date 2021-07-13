import * as S                   from "./styles";
import { FaUserCircle }         from "react-icons/fa";
import { IoWalletOutline }      from "react-icons/io5";
import ProfileData              from "../../components/ProfileData";
import api                      from "../../services/api";
import jwtDecode                from "jwt-decode";
import { useEffect, useState }  from "react";
import formatValue              from "../../utils/formatValue";
import { useHistory }           from "react-router-dom";
import Header                   from "../../components/Header";

const Profile = () => {

  const token = localStorage.getItem("@capstore:accessToken");

  const history = useHistory();

  if (!token) history.push("/")

  const [ userData, setUserData ] = useState();

  const getUserDatas = () => {
    const userId = jwtDecode(token).sub;
    api.get(`/users/${userId}`)
      .then( response => setUserData(response.data) );
  }

  useEffect( () => {
    userData === undefined && getUserDatas(); 
  });

  return (
    <>
      <Header />
      <S.Container>
        { 
          userData 
          ? 
          <S.Body>
            <S.Div>
              <S.LeftDiv>
                <FaUserCircle style={{fontSize: "200px"}} />
                <h3>{userData.name}</h3>
                <h3>{userData.location}</h3>
                { 
                  userData.type !== "client"
                  && 
                  <S.Wallet>
                    <IoWalletOutline style={{fontSize: "100px"}} />
                    <h4>{formatValue(userData.cash)}</h4>
                  </S.Wallet>
                }
              </S.LeftDiv>
              <S.RightDiv>
                <ProfileData data={userData} products={userData.products || []} />
              </S.RightDiv>
            </S.Div>
          </S.Body>
          :
          <h1>Carregando</h1>
        }
      </S.Container>
    </>
  );
};

export default Profile;