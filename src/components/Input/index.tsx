import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  error: string;
  name: string;
  register: (name: string) => void;
}

const Input = ({
  label,
  type,
  id,
  register,
  name,
  error = "",
  ...rest
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...register(name)} {...rest} id={id} />
      {!!error && <p>- {error}</p>}
    </>
  );
};
export default Input;
