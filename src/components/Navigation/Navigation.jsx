// import { Outlet } from 'react-router-dom';
import { NavStyled } from '../MainBar/MainBar.styled';

export const Navigation = () => {
  return (
    <>
      <NavStyled to="/">Нome</NavStyled>
      <NavStyled to="/contacts">Contacts</NavStyled>
    </>
  );
};
