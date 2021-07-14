import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
import * as S from "./styled";
import SellerTransferAndClientEvaluationModals from "../SellerTransferAndClientEvaluationModals";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useEffect } from "react";
import api from "../../services/api";
const Feedbacks = ({ evaluation, userType }) => {
  const productId = Number(localStorage.getItem("@capstone:product_Id") || "");

  const [openModal, setOpenModal] = useState(false);
  const [newFeedbacks, setNewFeedbacks] = useState([]);
  const { token } = useAuth();
  const getFeedbacks = () => {
    api
      .get(`products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNewFeedbacks(response.data.feedback));
  };
  useEffect(() => {
    if (!openModal) {
      getFeedbacks();
    }
    // eslint-disable-next-line
  }, [openModal]);

  return (
    <S.Container>
      <div>
        <h3>Avaliações</h3>
        <SellerTransferAndClientEvaluationModals
          open={openModal}
          onClose={() => setOpenModal(!openModal)}
        />
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

      {newFeedbacks.length === 0
        ? evaluation?.map((item, index) => (
            <ProductFeedback key={index} feedback={item} />
          ))
        : newFeedbacks.map((item, index) => (
            <ProductFeedback key={index} feedback={item} />
          ))}
    </S.Container>
  );
};

export default Feedbacks;
