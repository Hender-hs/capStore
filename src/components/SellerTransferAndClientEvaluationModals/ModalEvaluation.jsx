import { AiFillStar as FullStar } from "react-icons/ai";
import { AiOutlineStar as EmptyStar } from "react-icons/ai";
import { BsStarHalf as HalfStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Button from "../Button";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import { toastSuccess } from "../../utils/toast";

const ModalEvaluation = () => {
  const productId = Number(localStorage.getItem("@capstone:product_Id") || "");

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const { token } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [canSend, setCanSend] = useState(false);

  const getUserName = () => {
    const decoded = jwt_decode(token);
    api
      .get(`/users/${decoded.sub}`)
      .then((response) => setUserName(response.data.name));
  };

  const getFeedbacks = () => {
    api
      .get(`products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFeedbacks(response.data.feedback);
      });
  };

  const handleEvaluation = () => {
    setFeedbacks([...feedbacks, { user: userName, rating, comment, likes: 0 }]);
    setCanSend(!canSend);
  };

  const sendEvaluation = () => {
    if (rating > 0) {
      api
        .patch(
          `products/${productId}`,
          { feedback: [...feedbacks] },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => toastSuccess("Comentário enviado com sucesso!"));
    }
  };

  const onStarClick = (newValue) => {
    setRating(newValue);
  };

  useEffect(() => {
    getUserName();
    getFeedbacks();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (canSend) {
      sendEvaluation();
    }
    // eslint-disable-next-line
  }, [canSend]);
  return (
    <S.ModalContent>
      <S.ModalHeaderEvaluation>
        <label>Nota</label>
        <ReactStars
          count={5}
          onChange={onStarClick}
          size={30}
          isHalf={true}
          emptyIcon={<EmptyStar />}
          halfIcon={<HalfStar />}
          fullIcon={<FullStar />}
          activeColor="#ffd700"
        />
        <label htmlFor="commentary">Comentário</label>
        <textarea
          id="commentary"
          onChange={(e) => setComment(e.target.value)}
          style={{ outline: "none", fontSize: "16px", padding: "10px" }}
        />
      </S.ModalHeaderEvaluation>

      <Button handleClick={handleEvaluation}>Enviar</Button>
    </S.ModalContent>
  );
};
export default ModalEvaluation;
