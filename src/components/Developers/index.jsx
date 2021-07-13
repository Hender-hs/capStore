import { Container, Wrapper } from './styles'
import { useHistory } from 'react-router-dom'
import henderson from "../../assets/devs/henderson.jpeg"
import leonardo from "../../assets/devs/leonardo.jpeg"
import lucira from "../../assets/devs/lucira.jpeg"
import nicole from "../../assets/devs/nicole.jpeg"
import paulo from "../../assets/devs/paulo.jpeg"
import tanizia from "../../assets/devs/tanizia.jpeg"

const Developers = () => {
  const onClickFunc = (linkedin) => {
    window.open(linkedin)
  }

  return (
    <>
    <Wrapper>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/henderson-fernandes/")}>
      <img src={henderson} alt="dev" />
      <h3>Henderson F.</h3>
    </Container>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/leonardo-lima-alves-html/")}>
      <img src={leonardo} alt="dev" />
      <h3>Leonardo L.</h3>
    </Container>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/lucira-silva/")}>
      <img src={lucira} alt="dev" />
      <h3>Lucira S.</h3>
    </Container>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/nicole-m-7b799685/")}>
      <img src={nicole} alt="dev" />
      <h3>Nicole M.</h3>
    </Container>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/paulo-thor-silva-7b2294195/")}>
      <img src={paulo} alt="dev" />
      <h3>Paulo T.</h3>
    </Container>
    <Container onClick={() => onClickFunc("https://www.linkedin.com/in/taniziafagundes/")}>
      <img src={tanizia} alt="dev" />
      <h3>Tanizia F.</h3>
    </Container>
    </Wrapper>
    </>
  )
}

export default Developers