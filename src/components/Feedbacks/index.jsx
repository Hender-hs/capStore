import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
import * as S from "./styled";
import TransferModal from "../TransferModal";
import { useState } from "react";
const Feedbacks = ({ evaluation, userType }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <S.Container>
      <div>
        <h3>Avaliações</h3>
        <TransferModal open={openModal} />
        {userType === "client" && (
          <Button
            handleClick={() => setOpenModal(!openModal)}
            color="black"
            width="100px"
          >
            Avaliar
          </Button>
        )}
      </div>

      {evaluation?.map((item, index) => (
        <ProductFeedback key={index} feedback={item} />
      ))}
    </S.Container>
  );
};
export default Feedbacks;
