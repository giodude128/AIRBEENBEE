import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';
import { NavLink, useNavigate } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [displayMenu, setDisplayMenu] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setDisplayMenu(!displayMenu);
  };

  useEffect(() => {
    if (!displayMenu) return;

    const closeDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDisplayMenu(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, [displayMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    navigate('/');
  };

  const dropdownClassName = 'profile-dropdown' + (displayMenu ? '' : ' hidden');

  return (
    <>
      <ul>
        <button onClick={toggleMenu} className='menu'>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-regular fa-user"></i>
        </button>
        <ul className={dropdownClassName} ref={dropdownRef}>
          <ul className='text'><>Hello, {user.username}</></ul>
          <ul className='textEm'>{user.email}</ul>
          <ul className='manageSpots'>
            <NavLink to='/spots/current' onClick={toggleMenu} className='manageNav'>
              Manage Spots
            </NavLink>
          </ul>
          <ul className='logoutButton'>
            <button onClick={handleLogout} className='button'>Log Out</button>
          </ul>
        </ul>
      </ul>
    </>
  );
}

export default ProfileButton;
