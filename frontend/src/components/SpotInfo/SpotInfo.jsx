import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spotDetailsFetch } from "../../store/spots";
import { useParams } from "react-router-dom";
import './SpotInfo.css';
import Reviews from "../Reviews/Reviews";

function SpotInfo() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spotDetails = useSelector((state) => state.spots.currSpot);

  useEffect(() => {
    dispatch(spotDetailsFetch(spotId));
  }, [dispatch, spotId]);

  if (!spotDetails) return null;
  if (!spotDetails.SpotImages) return null;
  if (spotDetails.id !== parseInt(spotId)) return null;

  const showAlert = () => {
    alert("More Features Coming Soon");
  };

  let reviewsLabel;
  if (spotDetails.numReviews === 1) reviewsLabel = 'Review';
  if (spotDetails.numReviews > 1) reviewsLabel = 'Reviews';

  let reviewNumber = spotDetails.numReviews;
  if (spotDetails.numReviews === 0) reviewNumber = '';
  let separator = '•';
  if (!spotDetails.numReviews) separator = '';

  return (
    <div id='spotInfoDisplay'>
      <h1 className='spotName'>{spotDetails.name}</h1>
      <div className='loca'>{spotDetails.city}, {spotDetails.state}, {spotDetails.country}</div>
      <div className='imgs'>
        <div className='mainImgSec'> <img src={spotDetails.SpotImages[0].url} className='mainImg' /> </div>
        <div className='extras'>
          <div className='otherImgs'>
            {spotDetails.SpotImages[1] && <img src={spotDetails.SpotImages[1].url} id='additionalImg' className='extra1' />}
            {spotDetails.SpotImages[2] && <img src={spotDetails.SpotImages[2].url} id='additionalImg' className='extra2' />}
          </div>
          <div className='otherImgs2'>
            {spotDetails.SpotImages[3] && <img src={spotDetails.SpotImages[3].url} id='additionalImg' className='extra3' />}
            {spotDetails.SpotImages[4] && <img src={spotDetails.SpotImages[4].url} id='additionalImg' className='extra4' />}
          </div>
        </div>
      </div>
      <div className='descRes'>
        <div className='textAndButton'>
          <div className='details'>
            <h2 className='ownerName'>Hosted by {spotDetails.Owner.firstName} {spotDetails.Owner.lastName}</h2>
            <p className='description'>{spotDetails.description}</p>
          </div>
          <div className='reserve'>
            <div className='notButton'>
              <div className='resInfo'>
                <div className='priceRevs'> ${spotDetails.price} night </div>
                <div className='reviewInfo'>
                  <i className='fa-solid fa-star'></i>{typeof spotDetails.avgRating === 'number' ? (<p>{parseFloat(spotDetails.avgRating).toFixed(1)}</p>) : (<p>New</p>)}
                  <div className='dot'>{separator}</div>
                  <div className='numRevs'>{reviewNumber} {reviewsLabel}</div>
                </div>
              </div>
            </div>
            <button className="resButton" onClick={showAlert}>Reserve</button>
          </div>
        </div>
      </div>
      <Reviews spotId={spotId} />
    </div>
  );
}

export default SpotInfo;
