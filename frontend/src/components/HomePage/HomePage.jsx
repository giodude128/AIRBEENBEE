import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllSpotsFetch } from "../../store/spots";
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const spotsList = useSelector((state) => state.spots.allSpots.Spots);

  useEffect(() => {
    dispatch(getAllSpotsFetch());
  }, [dispatch]);

  const renderedSpots = spotsList?.map((spot) => (
    <div key={spot?.id} className="spotHolder">
      <NavLink to={`/spots/${spot?.id}`}>
        <div className='imgHolder'>
          <div className='toolTip' title={spot.name}>
            <img src={spot.previewImage} className='previewImg' alt={spot.name} />
          </div>
        </div>
        <div className='locaPrice'>
          <p className='location'>{spot.city}, {spot.state}</p>
          <p className='price'>${spot.price}.00 night</p>
        </div>
        <div className='reviewSection'>
          <div className='reviews'>
            <i className='fa-solid fa-star'></i>
            {typeof spot.avgRating === 'number' ? (
              <p>{parseFloat(spot.avgRating).toFixed(1)}</p>
            ) : (
              <p>New</p>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  ));

  return (
    <div className='returnPage'>
      <div className='home'>{renderedSpots}</div>
    </div>
  );
}

export default HomePage;
