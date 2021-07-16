import Header from "../../components/Header";
import Lottie from "react-lottie";
import * as S from "./styles";
import styled from "styled-components";

import notFoundAnimation from "../../assets/lotties/404-error.json";

export const StyledLottie = styled(Lottie)`
  width: 100px;
  height: 200px;
  display: none !important;
`;

const NotFound = () => {
  const notFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Header color="black" />
      <S.Container>
        <StyledLottie options={notFoundOptions} width="100%" />
      </S.Container>
    </div>
  );
};

export default NotFound;
