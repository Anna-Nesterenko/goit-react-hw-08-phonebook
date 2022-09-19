// import { NavStyled } from 'components/Navigation/Navigation.styled';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

export const AuthNav = () => {
  return (
    <>
      <NavLink className={getClassName} to="/register">
        Register
      </NavLink>
      |
      <NavLink className={getClassName} to="/login">
        LogIn
      </NavLink>
    </>
  );
};
