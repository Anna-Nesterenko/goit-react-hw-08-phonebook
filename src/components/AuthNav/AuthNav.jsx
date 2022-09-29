import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">Register</AuthNavStyled>|
      <AuthNavStyled to="/login">LogIn</AuthNavStyled>
    </div>
  );
};
