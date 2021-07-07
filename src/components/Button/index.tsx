import { ButtonStyled } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}
const Button = ({ children, handleClick, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled onClick={handleClick} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
