import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignUpFormModal/SignupFormModal';
import { useEffect, useState, useRef } from 'react';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const currentUser = useSelector((state) => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    if (!showDropdown) return;

    const closeDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, [showDropdown]);

  const dropdownClassName = 'nav-dropdown' + (showDropdown ? '' : ' hidden');

  let navigationLinks;
  if (currentUser) {
    navigationLinks = (
      <>
        <NavLink to='/spots/new' className='newSpot'>Create A Spot</NavLink>
        <ProfileButton user={currentUser} />
      </>
    );
  } else {
    navigationLinks = (
      <>
        <ul>
          <button onClick={toggleDropdown} className='menu'>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-regular fa-user"></i>
          </button>
          <ul className={dropdownClassName} ref={dropdownRef}>
            <div className='buttoncontainer'>
              <OpenModalButton
                buttonText="Log In"
                className='login'
                modalComponent={<LoginFormModal />}
              />
              <OpenModalButton
                buttonText="Sign Up"
                className='signup'
                modalComponent={<SignupFormModal />}
              />
            </div>
          </ul>
        </ul>
      </>
    );
  }

  return (
    <ul className='navbar'>
      <>
        <NavLink to="/" className='homelink'><i className="fa-solid fa-mountain-city"></i> AIRBEENBEE </NavLink>
      </>
      <div className='newSpotAndMenu'>
        {isLoaded && navigationLinks}
      </div>
    </ul>
  );
}

export default Navigation;
