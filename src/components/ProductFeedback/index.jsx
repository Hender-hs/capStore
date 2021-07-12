import StarRatingComponent from "react-star-rating-component";
const ProductFeedback = ( { feedback } ) => {
  const {user, rating, comment, likes} = feedback;
  return (
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
  );
};
export default ProductFeedback;
