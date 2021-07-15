import Container, { Background, BackgroundH2 } from './styles';
import developer from '../../assets/lotties/developer.json'
import Lottie from 'react-lottie';
import GlobalStyle from '../../styles/global'
import Developers from '../../components/Developers'
import Typed from 'react-typed';
import Header from "../../components/Header";
import { useState } from 'react';
import MenuDesktop from '../../components/MenuDesktop'


const AboutUs = () => {
  const developerOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;
  if (width < breakpoint) {
    return (
      <>
      <Header color="black"/>
      <div style={{height: "100vh"}}>
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
          <Typed 
            strings={['Quem somos?']}
            typeSpeed={140}
            style={{fontSize: "3rem"}}
          />
        </BackgroundH2>
        <Developers dev="henderson" />
      </Container>
      </div>
      </>
    )
  } else {
    return (
      <>
      <MenuDesktop color="#fff" bgcolor="var(--black)"/>
      <div style={{height: "100vh"}}>
      <Container>
        <GlobalStyle/> 
        <Background>
          <Lottie 
            options={developerOptions}
            height={250}
            width={250}
            style={{marginTop: 65}}
          />
        </Background>
        <BackgroundH2>
          <Typed 
            strings={['Quem somos?']}
            typeSpeed={140}
            style={{fontSize: "3rem"}}
          />
        </BackgroundH2>
        <Developers dev="henderson" />
      </Container>
      </div>
      </>
    )
  }
}

export default AboutUs