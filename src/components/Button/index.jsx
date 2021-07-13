import { ButtonStyled } from "./styled";

const Button = ({ children, handleClick, color, width, height, ...rest }) => {
  return (
    <ButtonStyled
      onClick={handleClick}
      color={color}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};
export default Button;
