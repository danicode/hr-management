"use client";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../../../contexts';

const Navbar = () => {

  const { logout, username } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav>
        <Link className="logo" to="/home">HR 2.0</Link>
        <NavLink to="/home" activeclassname="active">Home</NavLink>
        <NavLink to="/employees" activeclassname="active">Employee List</NavLink>
      </nav>
      <div className={styles.user}>
        <label className={styles.username}>👤 {username}</label>
        <button
          type="button"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
