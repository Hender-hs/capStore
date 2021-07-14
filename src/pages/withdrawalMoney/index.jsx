import { useState }                             from "react";
import * as S                                   from "./styles";
import Button                                   from "../../components/Button";
import SellerTransferAndClientEvaluationModals  from "../../components/SellerTransferAndClientEvaluationModals";
import Header                                   from "../../components/Header";

const WithdrawMoney = () => {
 
  const [openModal, setOpenModal]                           = useState(false);
  const [modalPixOrBankTransfer, setModalPixOrBankTransfer] = useState(null);

  const handleSwitchModals = (transferType) => {
    setOpenModal(true);
    setModalPixOrBankTransfer(transferType);
  };

  return (
    <S.Container>
      <Header />
      <S.PageBody>
        <div>
          <SellerTransferAndClientEvaluationModals type={modalPixOrBankTransfer} open={openModal} onClose={() => setOpenModal(false) } />
        </div>
        <S.DivButtons>
          <Button onClick={ () => handleSwitchModals("pix") } >Pix</Button>
          <Button onClick={ () => handleSwitchModals("transfer") } >Transferência</Button>
        </S.DivButtons>
      </S.PageBody>
    </S.Container>   
  );
};

export default WithdrawMoney;