import * as S                             from "./styles";
import { FaUserCircle as UserIcon }       from "react-icons/fa";
import { IoWalletOutline as WalletIcon }  from "react-icons/io5";
import ProfileData                        from "../../components/ProfileData";
import api                                from "../../services/api";
import jwtDecode                          from "jwt-decode";
import { useEffect, useState }            from "react";
import formatValue                        from "../../utils/formatValue";
import { useHistory }                     from "react-router-dom";
import Header                             from "../../components/Header";
import spaceAnimation from '../../assets/lotties/space.json'

const Profile = () => {

  const token = localStorage.getItem("@capstore:token");
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;
  const history = useHistory();

  if (!token) history.push("/")

  const [ userData, setUserData ] = useState();

  const spaceOptions = {
    loop: true,
      autoplay: true,
      animationData: spaceAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
  }

  const getUserDatas = () => {
    const userId = jwtDecode(token).sub;
    api.get(`/users/${userId}`)
      .then( response => setUserData(response.data) );
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  useEffect( () => {
    !userData && getUserDatas();
  });
  if (width < breakpoint) {
  return (
        <S.Container>
          <Header />
          { 
            userData 
            &&
            <S.Body>
              <S.Div>
                <S.RightDiv>
                  <ProfileData data={userData} products={userData.products || []} />
                </S.RightDiv>
              </S.Div>
            </S.Body>
          }
        </S.Container>
    );
  } else {
    return (
      <>
          
        <S.Container>
          <Header color="black" style={{color: "black"}} />
          <S.Background
          options={spaceOptions}
          width="100%"
          height="100vh"
          position="relative"
          style={{position: "relative", zIndex: 0}}
        />
          { 
            userData 
            &&
            <S.Body style={{position: "absolute", zIndex: 1}}>
              <S.Div>
                <S.RightDiv>
                  <ProfileData data={userData} products={userData.products || []} />
                </S.RightDiv>
              </S.Div>
            </S.Body>
          }
        </S.Container>
        </>
    );
  }
};

export default Profile;