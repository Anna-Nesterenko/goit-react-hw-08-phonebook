// import { Outlet } from 'react-router-dom';
import { NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <NavStyled to="/home">Нome</NavStyled>
      {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};
