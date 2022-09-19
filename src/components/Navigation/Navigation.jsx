// import { Outlet } from 'react-router-dom';
// import { NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <NavLink className={getClassName} to="/home">
        Нome
      </NavLink>
      {isLogin && (
        <NavLink className={getClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};
