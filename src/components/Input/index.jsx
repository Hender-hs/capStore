import * as S from "./styled";

const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...register(name)} {...rest} />
      {!!error && <p>- {error}</p>}
    </S.Container>
  );
};
export default Input;
