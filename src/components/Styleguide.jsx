import Product from "./Product";

const Styleguide = () => {
  return (
    <div>
      <Product
        name="Teclado Mecânico TGT Spawn Tournament"
        url=""
        price={200}
        quantity={2}
        userType="seller"
      />
      <Product
        name="Teclado Mecânico TGT Spawn Tournament"
        url=""
        price={200}
        quantity={2}
        userType="client"
      />
    </div>
  );
};

export default Styleguide;
