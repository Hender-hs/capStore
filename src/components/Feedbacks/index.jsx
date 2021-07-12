import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
import * as S from "./styled";

const Feedbacks = ({ evaluation, userType }) => {
  return (
    <S.Container>
      {userType === "client" && (
        <Button handleClick={() => console.log("abre modal")}>Avaliar</Button>
      )}
      {evaluation?.map((item, index) => (
        <ProductFeedback key={index} feedback={item} />
      ))}
    </S.Container>
  );
};
export default Feedbacks;