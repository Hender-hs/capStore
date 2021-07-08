const UserAndSellerData = ({propProfileData}) => {

  const { cep, phone, email, location } = propProfileData;

  return (
    <div>
      <ul>
        <li>{cep}</li>
        <li>{phone}</li>
        <li>{email}</li>
        <li>{location}</li>
        <li>Senha: ********</li>
      </ul>
    </div>
  );
};

export default UserAndSellerData;