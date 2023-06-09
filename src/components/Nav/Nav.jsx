import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton'
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">MNRoots</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <Link className="nav-register" to="/login">
            LogIn
          </Link>
        )}

        {!user.id && (
          <Link className="nav-register" to="/registration">
            Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/mnplants">
              MN Plants
            </Link>

            <Link className="navLink" to="/mygarden">
              My Garden
            </Link>

            <LogOutButton className="navLink logout" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

      </div>
    </div>
  );
}

export default Nav;
