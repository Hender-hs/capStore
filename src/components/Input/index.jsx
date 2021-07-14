import * as S from "./styled";

const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
<<<<<<< HEAD
      <input type={type} {...rest} />
      {!!error && <p>-{error}</p>}
    </>
=======
      <input type={type} {...register(name)} {...rest} />
      {!!error && <p>- {error}</p>}
    </S.Container>
>>>>>>> e2b41346aaa47d7262ebea74145fe132f2860de4
  );
};
export default Input;
