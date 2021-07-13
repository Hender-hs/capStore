import { Container } from './styles'
import { useHistory } from 'react-router-dom'

const Developers = ({dev, linkedin}) => {

  const history = useHistory();

  const onClickFunc = () => {
    history.push(linkedin)
  }

  return (

    <Container onClick={onClickFunc}>
      <img src="../../assets/devs/henderson.jpeg" alt="dev" />
    </Container>
  )
}

export default Developers