import FormRegisterProducts from "../../components/FormRegisterProducts";
import Header from "../../components/Header";
import Lottie from "react-lottie";

import * as S from "./styled";
import animationMarketing from "../../assets/lotties/marketing.json";

const RegisterProducts = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationMarketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header color="darkgreen" />
      <S.RegisterContainer>
        <div className="animation">
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
        <S.Container>
          <FormRegisterProducts />
        </S.Container>
      </S.RegisterContainer>
    </>
  );
};

export default RegisterProducts;
