import ProductFeedback from "../ProductFeedback";
const Feedbacks = ({ product }) => {
  return (
    <div>
      {product.feedback.map((item, index) => (
        <ProductFeedback key={index} feedback={item} />
      ))}
    </div>
  );
};
export default Feedbacks;