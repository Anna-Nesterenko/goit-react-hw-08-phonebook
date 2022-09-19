import { NavStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <>
      <NavStyled to="/register">Register</NavStyled> |
      <NavStyled to="/login">LogIn</NavStyled>
    </>
  );
};
