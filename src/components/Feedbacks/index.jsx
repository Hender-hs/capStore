import ProductFeedback from "../ProductFeedback";
import Button from "../Button";
const Feedbacks = ({ evaluation, userType }) => {
  return (
    <div>
      {userType === "client" && (
        <Button handleClick={() => console.log("abre modal")}>Avaliar</Button>
      )}
      {evaluation?.map((item, index) => (
        <ProductFeedback key={index} feedback={item} />
      ))}
    </div>
  );
};
export default Feedbacks;