const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type}{...register(name)}{...rest} />
      {!!error && <p>- {error}</p>}
    </>
  );
};
export default Input;
