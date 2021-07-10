const Input = ({ label, type, register, id, error = "", ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} {...rest} />
      {!!error && <p>-{error}</p>}
    </>
  );
};

export default Input;
