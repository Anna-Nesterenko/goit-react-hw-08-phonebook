import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 4px double black;

  &:hover {
    color: #66d0d0;
    border-bottom: 4px double #66d0d0;
  }

  &.active {
    color: white;
    border-bottom: 4px double white;

    &:hover {
      color: #66d0d0;
      border-bottom: 4px double #66d0d0;
    }
  }
`;
