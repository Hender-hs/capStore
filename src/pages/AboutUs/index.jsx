import Container, { Background, BackgroundH2 } from './styles';
import developer from '../../assets/lotties/developer.json'
import Lottie from 'react-lottie';
import GlobalStyle from '../../styles/global'
import Developers from '../../components/Developers'

const AboutUs = () => {
  const developerOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container>
      <GlobalStyle/> 
      <Background>
        <Lottie 
          options={developerOptions}
          height={250}
          width={250}
        />
      </Background>
      <BackgroundH2>
        <h2>Quem somos?</h2>
      </BackgroundH2>
      <Developers dev="../../assets/devs/henderson.jpeg" />
    </Container>
  )
}

export default AboutUs