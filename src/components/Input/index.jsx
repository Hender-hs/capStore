const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type}{...rest} />
      {!!error && <p>- {error}</p>}
    </>
  );
};
export default Input;
