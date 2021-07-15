import Container, { Background, BackgroundH2 } from "./styles";
import developer from "../../assets/lotties/developer.json";
import Lottie from "react-lottie";
import GlobalStyle from "../../styles/global";
import Developers from "../../components/Developers";
import Typed from "react-typed";
import Header from "../../components/Header";
const AboutUs = () => {
  const developerOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header color="black" />
      <div style={{ height: "100vh" }}>
        <Container>
          <GlobalStyle />
          <Background>
            <Lottie options={developerOptions} height={250} width={250} />
          </Background>
          <BackgroundH2>
            <Typed
              strings={["Quem somos?"]}
              typeSpeed={140}
              style={{ fontSize: "3rem" }}
            />
          </BackgroundH2>
          <Developers dev="henderson" />
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
