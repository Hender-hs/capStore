import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
const Feedbacks = ({ product, userType }) => {
  return (
    <div>
      { userType === "client" && (
        <Button handleClick={() => console.log("abre modal")}>Avaliar</Button>
      )}
      {product.feedback.map((item, index) => (
        <ProductFeedback key={index} feedback={item} />
      ))}
    </div>
  );
};
export default Feedbacks;