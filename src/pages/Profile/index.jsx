import * as S from "./styles";
import ProfileData from "../../components/ProfileData";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import spaceAnimation from "../../assets/lotties/space.json";
import MenuDesktop from "../../components/MenuDesktop";
import { useAuth } from "../../providers/Auth";

const Profile = () => {
  const { token, getUserInfo, user } = useAuth();

  const history = useHistory();

  if (!token) history.push("/");

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  const spaceOptions = {
    loop: true,
    autoplay: true,
    animationData: spaceAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width < breakpoint) {
    return (
      <S.Container>
        <Header />
        {user && (
          <S.Body>
            <S.Div>
              <S.RightDiv>
                <ProfileData data={user} products={user.products || []} />
              </S.RightDiv>
            </S.Div>
          </S.Body>
        )}
      </S.Container>
    );
  } else {
    return (
      <>
        <S.Container>
          <MenuDesktop color="#fff" />
          <S.Background
            options={spaceOptions}
            width="100%"
            height="100vh"
            position="relative"
            style={{ position: "relative", zIndex: 0, marginTop: 65 }}
          />
          {user && (
            <S.Body style={{ position: "absolute", zIndex: 1 }}>
              <S.Div>
                <S.RightDiv>
                  <ProfileData data={user} products={user.products || []} />
                </S.RightDiv>
              </S.Div>
            </S.Body>
          )}
        </S.Container>
      </>
    );
  }
};

export default Profile;
