const Input = ({ label, type, register, name, error = "", ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
<<<<<<< HEAD
      <input type={type} {...rest} />
      {!!error && <p>-{error}</p>}
=======
      <input type={type}{...rest} />
      {!!error && <p>- {error}</p>}
>>>>>>> 0387da4881d1073020da1fc8ed4d0406749c479a
    </>
  );
};
export default Input;
