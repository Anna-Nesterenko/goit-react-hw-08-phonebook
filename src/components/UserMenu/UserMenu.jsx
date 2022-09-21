import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';
import styled from 'styled-components';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <StyledName>Hello, {name} </StyledName>
      <button onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
};
export const StyledName = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: white;
`;
