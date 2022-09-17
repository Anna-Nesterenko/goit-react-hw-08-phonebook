import { NavStyled } from '../MainBar/MainBar.styled';

export const AuthNav = () => {
  return (
    <>
      <NavStyled to="/register">Register</NavStyled> |
      <NavStyled to="/login">LogIn</NavStyled>
    </>
  );
};
