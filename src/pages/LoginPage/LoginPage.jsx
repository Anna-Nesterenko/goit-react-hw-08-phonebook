import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authThunk';
import { isAuth } from 'redux/auth/authSelectors';
// import toast from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
//   const { status } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    //  if (status === 400) {
    //    toast.error('You are not already registered');
    //  }
    dispatch(logIn(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;
