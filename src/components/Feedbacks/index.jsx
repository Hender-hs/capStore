import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
import * as S from "./styled";

const Feedbacks = ({ evaluation, userType }) => {
  return (
    <S.Container>
      <div>
        <h3>Avaliações</h3>
        {userType === "client" && (
          <Button
            handleClick={() => console.log("abre modal")}
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