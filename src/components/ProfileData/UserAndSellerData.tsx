interface ProfileData {
  cep: string,
  phone: number,
  email: string,
  location: string,
}

interface ComponentProps {
  propProfileData: ProfileData
}

const UserAndSellerData = ({propProfileData}: ComponentProps) => {

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