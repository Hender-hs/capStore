import * as S from "./styled.ts";

const Button = ({ children, handleClick, color }) => {
  return <S.Container onClick={handleClick}>{children}</S.Container>;
};

export default Button;
