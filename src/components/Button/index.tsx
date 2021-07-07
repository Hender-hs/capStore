import { ButtonStyled } from "./styles";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  color?: string;
  width?: string;
  height?: string;
}
const Button = ({
  children,
  handleClick,
  color = "white",
  width = "0.5rem",
  height = "1rem",
  ...rest
}: ButtonProps) => {
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
