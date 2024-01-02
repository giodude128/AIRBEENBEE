import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/reviews";
import './Reviews.css';

function Reviews({ spotId }) {
  const dispatch = useDispatch();
  const spotDetails = useSelector((state) => state.spots.currSpot);
  const currentReviews = useSelector((state) => state.reviews.spot.Reviews);
  const currentUser = useSelector((state) => state.session.user);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  useEffect(() => {
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);

  if (!spotDetails || !currentReviews) return null;

  const orderedReviews = [...currentReviews].sort((review, nextReview) => new Date(nextReview.createdAt) - new Date(review.createdAt));

  let isOwner = false;
  if (spotDetails && spotDetails.Owner && currentUser) {
    isOwner = spotDetails.Owner.id === currentUser.id;
  }

  let reviewsLabel = "Reviews";
  if (currentReviews.length === 1) {
    reviewsLabel = 'Review';
  }

  let notReviewedState = true;
  if (currentReviews) {
    for (const review of currentReviews) {
      if (currentUser && review.User.id === currentUser.id) {
        notReviewedState = false;
        break;
      }
    }
  }

  let isLoggedIn = false;
  if (currentUser) isLoggedIn = true;

  if (!currentReviews.length) {
    return (
      <div className='revBox'>
        <div className='revHeader'>
          <i className="fa-solid fa-star"></i>
          <p className="revsLabel">New</p>
        </div>
        {!isOwner && isLoggedIn && notReviewedState && <p className='firstRev'>Be the first to post a review!</p>}
      </div>
    );
  }

  return (
    <div className="revBox">
      <div className='revHeader'>
        <i id='revDisplayStar' className="fa-solid fa-star"></i>
        <div className='avgRate'>{spotDetails.avgRating.toFixed(1)}</div>
        <div>•</div>
        <div className='revNumDisp'> {spotDetails.numReviews} </div>
        <div className='revLabelDisp'> {reviewsLabel}</div>
      </div>
      <div className='reviewList'>
        {orderedReviews.map((review) => (
          <div key={review.id} className='singleRev'>
            <div className='userDisplay'>{review.User.firstName}</div>
            <div className='date'>
              <div className='month'>{months[new Date(review.createdAt).getMonth()]}</div>
              <div className='year'>{review.createdAt.slice(6, 10)}</div>
            </div>
            <div className='revText'>{review.review}</div>
          </div>
        )).reverse()}
      </div>
    </div>
  );
}

export default Reviews;
