import StarRatingComponent from "react-star-rating-component";
import * as S from "./styled";
import { AiOutlineLike as LikeIcon } from "react-icons/ai";
const ProductFeedback = ( { feedback } ) => {
  const {user, rating, comment, likes} = feedback;
  return (
    <S.Container>
      <div>
        <h4>{user}</h4>
        <StarRatingComponent
          editing={false}
          name={user}
          starCount={5}
          starColor={`var(--black)`}
          emptyStarColor={`var(--gray)`}
          value={rating}
        />
      </div>
      {comment && <p>{comment}</p>}
      {likes !== 0 && (
        <S.Likes>
          {likes}
          <span>
            <LikeIcon size={20} />
          </span>
        </S.Likes>
      )}
    </S.Container>
  );
};
export default ProductFeedback;
