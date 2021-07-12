import Button from '../../components/Button';
import * as S from './styles';

const WithdrawMoney = () => {
 
  return (
    <S.Container>
      <S.FakeHeader/>
      <S.PageBody>
        <div>
          
        </div>
        <S.DivButtons>
          <Button>Pix</Button>
          <Button>Transferência</Button>
        </S.DivButtons>
      </S.PageBody>
    </S.Container>   
  );
};

export default WithdrawMoney;