import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <span>{name}</span>
      <button onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
};
