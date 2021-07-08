import StarRatingComponent from "react-star-rating-component";

interface Feedback {
  user: string;
  rating: number;
  comment?: string;
  likes?: number;
}
const ProductFeedback = ({ user, rating, comment, likes }: Feedback) => {
  return (
    <div>
      <h3>Avaliações</h3>
      <div>
        <div>
          <h4>{user}</h4>
          <StarRatingComponent
            editing={false}
            name={user}
            starCount={5}
            value={rating}
          />
        </div>
        <div>
          {comment && <p>{comment}</p>}
          {likes && <span>{likes}</span>}
        </div>
      </div>
    </div>
  );
};
export default ProductFeedback;
