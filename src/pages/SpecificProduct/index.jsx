import Product from "../../components/Product";

const SpecificProduct = () => {
  return (
    <div>
      <Product
        name="monitor"
        url="image"
        price={12312}
        quantity={2}
        userType="client"
      />
    </div>
  );
};
export default SpecificProduct;
